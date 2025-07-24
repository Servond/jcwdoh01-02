import prisma from "../lib/prisma";
import { sign } from "jsonwebtoken";
import { compareSync, genSaltSync, hashSync } from "bcrypt";

import { FE_URL, SECRET_KEY } from "../config";
import {
  ILoginParams,
  IForgotPasswordParams,
  IChangePasswordParams,
} from "../interfaces/auth.type";
import mailer from "../utils/nodemailer";
import handlebars from "handlebars";
import path from "path";
import fs from "fs";
export async function LoginRepo(params: ILoginParams) {
  try {
    const user = await prisma.user.findUnique({
      select: {
        email: true,
        firstname: true,
        lastname: true,
        password: true,
        avatar: true,
        role: {
          select: {
            name: true,
          },
        },
      },
      where: {
        email: params.email,
      },
    });

    if (!user) throw new Error("Email or password invalid");

    const verifyPass = compareSync(params.password, user.password);

    if (!verifyPass) throw new Error("Email or password invalid");

    const payload = {
      email: user.email,
      firstname: user.firstname,
      lastname: user.lastname,
      role: user.role.name,
      avatar: user.avatar,
    };

    const token = sign(payload, SECRET_KEY as string, { expiresIn: "1h" });

    return { token, payload };
  } catch (err) {
    throw err;
  }
}

export async function forgotPassRepo(params: IForgotPasswordParams) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: params.email,
      },
    });

    if (!user) throw new Error("Email not found");

    const templatePath = path.join(
      __dirname,
      "../template/html",
      "forgotPassword.hbs"
    );
    const templateSrc = fs.readFileSync(templatePath, "utf-8");
    const compileTemplate = handlebars.compile(templateSrc);

    const payload = {
      email: user.email,
    };

    const token = sign(payload, SECRET_KEY as string, { expiresIn: "15m" });

    const html = compileTemplate({
      url: `${FE_URL}/forgot-password?token=${token}`,
    });

    await prisma.$transaction(async (tx) => {
      await mailer.sendMail({
        to: user.email,
        subject: "Forgot Password",
        html: html,
      });

      await tx.tokenForgotPassword.create({
        data: {
          token,
        },
      });
    });
  } catch (err) {
    throw err;
  }
}

export async function ChangePasswordRepo(params: IChangePasswordParams) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: params.email,
      },
    });
    if (!user) throw new Error("Something went wrong");

    const salt = genSaltSync(10);
    const hashPass = hashSync(params.password, salt);

    await prisma.$transaction(async (tx) => {
      await tx.user.update({
        data: {
          password: hashPass,
        },
        where: {
          id: user.id,
        },
      });

      await tx.tokenForgotPassword.delete({
        where: {
          token: params.token,
        },
      });
    });
  } catch (err) {
    throw err;
  }
}
