export interface IRegisterParams {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  avatar: File | null;
  role: string;
}
