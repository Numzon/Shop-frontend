import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { QueryClientProvider, queryClient } from "./lib/react-query";
import LanguageContextProvider from "./context/LanguageContext";
import AuthContextProvider from "./auth/AuthContext";
import PaletteModeContextProvider from "./theme/PaletteModeContext";
import ThemeProvider from "./theme";
import "./lib/i18n";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageContextProvider>
        <AuthContextProvider>
          <BrowserRouter>
            <PaletteModeContextProvider>
              <ThemeProvider>
                <AppRoutes />
              </ThemeProvider>
            </PaletteModeContextProvider>
          </BrowserRouter>
        </AuthContextProvider>
      </LanguageContextProvider>
    </QueryClientProvider>
  );
}

export default App;
