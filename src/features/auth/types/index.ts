export interface ISignInForm {
  email: string;
  password: string;
}

export interface ISignUpForm {
  firstName: string;
  email: string;
  password: string;
}

export interface ISignInResponse {
  jwtToken: string;
  username: string;
}
