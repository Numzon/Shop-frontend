import { ChangeEmailRequest, UserDto } from "../../types";
import { fetch } from ".";
import { UserUrls } from "../../constants";

export const getCurrentUser = (): Promise<{ data: UserDto; status: number }> =>
  fetch.get(UserUrls.GET_CURRENT_USER);

export const changeEmail = (
  model: ChangeEmailRequest
): Promise<{ data: UserDto; status: number }> =>
  fetch.put(UserUrls.PUT_EMAIL, model);
