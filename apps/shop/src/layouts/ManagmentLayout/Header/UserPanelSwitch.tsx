import { IconButton } from "@mui/material";
import { useRouter } from "../../../routes/hooks";
import { Paths } from "../../../constants";
import HomeIcon from "@mui/icons-material/Home";

export const UserPanelSwitch = () => {
  const router = useRouter();
  return (
    <IconButton
      color="inherit"
      sx={{ ml: 1 }}
      onClick={() => router.push(Paths.HOME)}
    >
      <HomeIcon />
    </IconButton>
  );
};

export default UserPanelSwitch;
