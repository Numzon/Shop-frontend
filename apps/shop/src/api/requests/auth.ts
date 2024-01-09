import { fetch } from "./fetch";
import { AuthenticationUrls } from "../../constants";
import {
  SignInRequest,
  RefreshTokenRequest,
  AuthResponse,
  SignUpRequest,
} from "../../types";

export const signIn = (
  model: SignInRequest
): Promise<{ data: AuthResponse; status: number }> =>
  fetch.post(AuthenticationUrls.SIGN_IN, model);

export const signUp = (
  model: SignUpRequest
): Promise<{ data: AuthResponse; status: number }> =>
  fetch.post(AuthenticationUrls.SIGN_UP, model);

export const refreshToken = (
  model: RefreshTokenRequest
): Promise<{ data: AuthResponse; status: number }> =>
  fetch.post(AuthenticationUrls.REFRESH_TOKEN, model);
