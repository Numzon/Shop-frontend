import { createContext, useState } from "react";
import { useTranslation } from "react-i18next";

export type LanguageCode = "en" | "pl";
type LanguageContextValue = {
  languageCode: LanguageCode;
  setLanguageCode: (code: LanguageCode) => void;
};

export const SelectedLanguageContext = createContext<LanguageContextValue>(
  null!
);

export default function SelectedLanguageContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [languageCode, setLanguageCode] = useState<LanguageCode>("en");
  const { i18n } = useTranslation();

  const handleLanguageCodeChange = (languageCode: LanguageCode) => {
    i18n.changeLanguage(languageCode);
    setLanguageCode(languageCode);
  };

  return (
    <SelectedLanguageContext.Provider
      value={{ languageCode, setLanguageCode: handleLanguageCodeChange }}
    >
      {children}
    </SelectedLanguageContext.Provider>
  );
}
