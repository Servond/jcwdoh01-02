import axios from "axios";
import { IRegisterArgs } from "../type";

export async function RegisterService(params: IRegisterArgs) {
  try {
    await axios.post("https://solidbridge-us.backendless.app/api/data/user", {
      email: params.email,
      password: params.password,
    });
  } catch (err: any) {
    // console.log(err.response.data);
    throw err;
  }
}
