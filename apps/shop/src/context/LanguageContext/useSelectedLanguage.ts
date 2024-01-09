import { useContext } from "react";
import { SelectedLanguageContext } from "./LanguageContext";

export function useSelectedLanguage() {
  const context = useContext(SelectedLanguageContext);

  if (!context) {
    throw new Error(
      "useSelectedLanguage must be used within a SelectedLanguageContextProvider"
    );
  }

  return context;
}
