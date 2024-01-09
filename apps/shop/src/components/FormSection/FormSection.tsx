import { Card, CardContent, CardHeader } from "@mui/material";

export const FormSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <Card>
      <CardHeader title={title}></CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default FormSection;
