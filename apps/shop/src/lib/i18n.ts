import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translations: {
      SignIn: "Sign In",
      SingUp: "Sing Up",
    },
  },
  pl: {
    translations: {
      SignIn: "Zaloguj się",
      SingUp: "Zarejestruj się",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
});

export default i18n;
