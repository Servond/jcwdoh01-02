import prisma from "../lib/prisma";

export async function findToken(params: string) {
  try {
    const token = await prisma.tokenForgotPassword.findUnique({
      where: {
        token: params,
      },
    });

    return token;
  } catch (err) {
    throw err;
  }
}
