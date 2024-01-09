import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
  useTheme,
} from "@mui/material";

type YesNoDialogProps = {
  open: boolean;
  title: string;
  description?: string;
  onYes: () => void;
  onNo: () => void;
};

export const YesNoDialog = ({
  open,
  title,
  description,
  onNo,
  onYes,
}: YesNoDialogProps) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
      {description && (
        <DialogContent>
          <DialogContentText>{description}</DialogContentText>
        </DialogContent>
      )}
      <DialogActions>
        <Button autoFocus onClick={() => onNo()} variant="outlined">
          No
        </Button>
        <Button onClick={() => onYes()} autoFocus variant="contained">
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default YesNoDialog;
