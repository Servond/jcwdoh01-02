import axios from "axios";
import { ILoginParams } from "@/views/login/types";

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
