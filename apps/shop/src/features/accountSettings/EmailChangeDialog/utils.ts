import { ChangeEmailRequest } from "../../../types";
import { EmailFormValues } from "./validation";

export const mapFormValuesToChangeEmailRequest = (values: EmailFormValues) => {
  const user: ChangeEmailRequest = {
    id: values.id,
    email: values.email,
    newEmail: values.newEmail,
    password: values.password,
  };
  return user;
};
