export type UserDto = {
  id: string;
  email: string;
  userName: string;
};

export type ChangeEmailRequest = {
  id: string;
  email: string;
  newEmail: string;
  password: string;
};
