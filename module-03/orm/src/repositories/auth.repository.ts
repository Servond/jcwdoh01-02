import prisma from "../lib/prisma";
import { sign } from "jsonwebtoken";
import { compareSync } from "bcrypt";

import { SECRET_KEY } from "../config";
import { ILoginParams } from "../interfaces/auth.type";

export async function LoginRepo(params: ILoginParams) {
  try {
    const user = await prisma.user.findUnique({
      select: {
        email: true,
        firstname: true,
        lastname: true,
        password: true,
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
    };

    const token = sign(payload, SECRET_KEY as string, { expiresIn: "1h" });

    return { token, payload };
  } catch (err) {
    throw err;
  }
}
