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

export interface User {
  email: string;
  name: string;
}

export interface IAuthService {
  login(username: string, password: string): Promise<User | null>;
}
