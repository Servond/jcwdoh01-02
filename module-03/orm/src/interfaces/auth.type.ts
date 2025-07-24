export interface ILoginParams {
  email: string;
  password: string;
}

export interface IForgotPasswordParams {
  email: string;
}

export interface IChangePasswordParams {
  email: string;
  password: string;
  token: string;
}
