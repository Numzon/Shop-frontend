import { Button, ButtonProps } from "@mui/material";
import { useRouter } from "../../routes/hooks/useRouter";

type LinkButtonProps = Omit<ButtonProps, "onClick"> & {
  to: string;
};

export const LinkButton = ({
  to,
  children,
  ...otherProps
}: LinkButtonProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(to);
  };

  return (
    <Button {...otherProps} onClick={handleClick}>
      {children}
    </Button>
  );
};

export default LinkButton;
