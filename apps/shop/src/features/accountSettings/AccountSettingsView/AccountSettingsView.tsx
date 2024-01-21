import {
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import useGetCurrentUser from "../../../api/hooks/User/useGetCurrentUser";
import { useEffect, useState } from "react";
import { UserDto } from "../../../types";
import EmailChangeDialog from "../EmailChangeDialog";
import { useAuth } from "../../../auth";

export const AccountSettingsView = () => {
  const { currentUser } = useAuth();
  const { data, isLoading, isError, refetch } = useGetCurrentUser(
    currentUser?.id ?? ""
  );
  const [user, setUser] = useState<UserDto>();
  const [openEmailForm, setOpenEmailForm] = useState(false);

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data]);

  const handleOpenEmailForm = () => {
    setOpenEmailForm(true);
  };

  const handleCloseEmailForm = () => {
    setOpenEmailForm(false);
  };

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (isError) {
    return <Typography>Something went wrong...</Typography>;
  }

  return (
    <>
      <Stack spacing={2}>
        <TextField
          fullWidth
          label={"Email"}
          value={user?.email ?? ""}
          disabled
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" onClick={handleOpenEmailForm}>
                  <EditIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          fullWidth
          label={"User name"}
          value={user?.userName ?? ""}
          disabled
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end">
                  <EditIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          fullWidth
          label={"Password"}
          defaultValue={"Don't try it Anakin!"}
          disabled
          type="password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end">
                  <EditIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      {user && (
        <EmailChangeDialog
          open={openEmailForm}
          onCancel={handleCloseEmailForm}
          onSuccess={() => {
            refetch();
            handleCloseEmailForm();
          }}
          user={user}
        />
      )}
    </>
  );
};

export default AccountSettingsView;
