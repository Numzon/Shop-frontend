import { Box, Card, CardContent, CardHeader } from "@mui/material";
import AccountSettingsView from "../../features/accountSettings/AccountSettingsView";

export const AccountSettingsPage = () => {
  return (
    <Box>
      <Card>
        <CardHeader title="Account settings" />
        <CardContent>
          <AccountSettingsView />
        </CardContent>
      </Card>
    </Box>
  );
};

export default AccountSettingsPage;
