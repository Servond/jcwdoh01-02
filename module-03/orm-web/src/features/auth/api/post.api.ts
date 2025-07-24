import axios from "axios";
import { ILoginParams, IResetPasswordParams } from "@/views/login/types";
import { IChangePasswordParams } from "./types";

export async function LoginService(params: ILoginParams) {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/auth`,
      {
        ...params,
      }
    );

    return data;
  } catch (err) {
    throw err;
  }
}

export async function ResetPasswordService(params: IResetPasswordParams) {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/auth/forgot-password`,
      {
        ...params,
      }
    );

    return data;
  } catch (err) {
    throw err;
  }
}

export async function ChangePasswordService(params: IChangePasswordParams) {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/auth/change-password`,
      {
        password: params.password,
      },
      {
        headers: {
          Authorization: `Bearer ${params.token}`,
        },
      }
    );

    return data;
  } catch (err) {
    throw err;
  }
}
