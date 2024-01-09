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

type ErrorDialogProps = {
  open: boolean;
  title?: string;
  description?: string;
  onOk: () => void;
};

export const ErrorDialog = ({
  open,
  title,
  description,
  onOk,
}: ErrorDialogProps) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      aria-labelledby="responsive-error-dialog-title"
    >
      {title && (
        <DialogTitle id="responsive-error-dialog-title">{title}</DialogTitle>
      )}

      {!title && (
        <DialogTitle id="responsive-error-dialog-title">Error</DialogTitle>
      )}

      {description && (
        <DialogContent>
          <DialogContentText>{description}</DialogContentText>
        </DialogContent>
      )}
      <DialogActions>
        <Button autoFocus onClick={() => onOk()} variant="contained">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ErrorDialog;
