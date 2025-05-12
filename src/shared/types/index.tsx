export interface IUser {
  username: string;
  displayName: string;
  email: string;
  photoUrl: string;
}

export interface IError {
  cause: string;
  message: string;
  statusCode: string;
}
