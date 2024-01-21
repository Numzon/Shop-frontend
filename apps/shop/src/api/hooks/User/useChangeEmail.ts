import { useMutation } from "@tanstack/react-query";
import { changeEmail } from "../..";
import { ChangeEmailRequest, UserDto } from "../../../types";
import { queryClient } from "../../../lib/react-query";
import { UserKeys } from "./userKeys";

export const useChangeEmail = () =>
  useMutation({
    mutationFn: async (model: ChangeEmailRequest) => {
      const { data } = await changeEmail(model);
      return data;
    },
    onMutate: async (model: ChangeEmailRequest) => {
      await queryClient.cancelQueries({
        queryKey: [UserKeys.USER_DATA, model.id],
      });

      var old = queryClient.getQueryData<UserDto>([
        UserKeys.USER_DATA,
        model.id,
      ]);

      if (!old) {
        return old;
      }

      const optimisticUser: UserDto = { ...old, email: model.email };

      queryClient.setQueryData<UserDto>(
        [UserKeys.USER_DATA, model.id],
        optimisticUser
      );

      return { optimisticUser };
    },
    onSuccess: (result, variables, _context) => {
      queryClient.setQueryData<UserDto>(
        [UserKeys.USER_DATA, variables.id],
        result
      );
    },
    onError: (_error, variables, _context) => {
      queryClient.setQueryData<UserDto>(
        [UserKeys.USER_DATA, variables.id],
        undefined
      );
    },
  });
