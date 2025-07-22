import prisma from "../lib/prisma";
import { genSaltSync, hashSync } from "bcrypt";

import { cloudinaryUpload } from "../utils/cloudinary";
import { Role } from "@prisma/client";
import { ICreateUserParam } from "../interfaces/user.types";

export async function findUserByEmail(email: string) {
  try {
    const resp = await prisma.user.findFirst({
      omit: {
        lastname: true,
      },
      where: {
        email: {
          equals: email,
          mode: "insensitive",
        },
      },
    });
    // select * from user where email = email;

    return resp;
  } catch (err) {
    throw err;
  }
}

export async function findUserById(id: string) {
  try {
    const resp = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    // select * from user where email = email;

    return resp;
  } catch (err) {
    throw err;
  }
}

export async function createUserRepo(params: ICreateUserParam) {
  let avatarUrl: string = "";
  try {
    const temp = await findUserByEmail(params.email);

    if (temp) {
      throw new Error("Email sudah terdaftar");
    }

    const salt = genSaltSync(10);
    const hashPass = hashSync(params.password, salt);

    const t = await prisma.$transaction(async (tx) => {
      let role: Role | null;
      role = await tx.role.findFirst({
        where: {
          name: params.role,
        },
      });

      if (!role) {
        role = await tx.role.create({
          data: { name: params.role },
        });
      }

      if (params.avatar) {
        const { secure_url } = await cloudinaryUpload(params.avatar);
        avatarUrl = secure_url;
      }

      const user = await tx.user.create({
        data: {
          email: params.email,
          password: hashPass,
          firstname: params.firstname,
          lastname: params.lastname,
          role_id: role.id,
          avatar: avatarUrl,
        },
      });

      return user;
    });
    // insert into user(email, firstname, lastname)
    // values(params.email, params.firstname, params.lastname)

    return t;
  } catch (err) {
    throw err;
  }
}
