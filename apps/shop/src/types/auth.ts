export type SignInRequest = {
  email: string;
  password: string;
};

export type AuthResponse = {
  success: boolean;
  token: string;
  refreshToken: string;
  errors: string[];
};

export type SignUpRequest = {
  email: string;
  password: string;
  repeatPassword: string;
};

export type CurrentUser = {
  id: string;
  email: string;
  role: string;
};

export type RefreshTokenRequest = {
  token: string;
  refreshToken: string;
};
