import { useMediaQuery } from "@mui/material";
import { createContext, useContext, useEffect, useState } from "react";

type Mode = "light" | "dark";
type ModeContextValue = { mode: Mode; switchMode: () => void };

const ModeContext = createContext<ModeContextValue>(null!);

export const PaletteModeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState<Mode>("light");

  const switchMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light");
  }, [prefersDarkMode]);

  return (
    <ModeContext.Provider value={{ mode, switchMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export function useModeContext() {
  const context = useContext(ModeContext);

  if (!context)
    throw new Error("useModeContext must be used within a ModeContextProvider");

  return context;
}

export default PaletteModeContextProvider;
