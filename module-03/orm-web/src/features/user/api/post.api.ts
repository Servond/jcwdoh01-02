import axios from "axios";
import { IRegisterParams } from "@/views/register/types";

export default async function createUserService(params: IRegisterParams) {
  try {
    const formData = new FormData();
    formData.append("email", params.email);
    formData.append("password", params.password);
    formData.append("firstname", params.firstname);
    formData.append("lastname", params.lastname);
    formData.append("role", params.role);
    if (params.avatar) formData.append("avatar", params.avatar);

    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/users`,
      formData
    );

    return data;
  } catch (err) {
    throw err;
  }
}
