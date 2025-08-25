export interface SignInRequest {
  id: string;
  password: string;
}

export interface SignupRequest {
  id: string;
  password: string;
  checkPassword: string;
}
