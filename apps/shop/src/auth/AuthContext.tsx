import React, { createContext, useCallback, useEffect, useState } from "react";
import { CurrentUser } from "../types";
import { SessionStorage } from "../constants";
import { jwtDecode } from "jwt-decode";
import { useRefreshToken } from "../api/hooks/Auth";

type AuthContextType = {
  setTokens: (token: string, refreshToken: string) => void;
  signOut: () => void;
  currentUser: CurrentUser | null;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export default function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authTokens, setAuthTokens] = useState({
    token: sessionStorage.getItem(SessionStorage.TOKEN),
    refreshToken: sessionStorage.getItem(SessionStorage.REFRESH_TOKEN),
  });
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
  const { mutateAsync } = useRefreshToken();

  const setSessionToken = (token: string | null) => {
    if (token) {
      sessionStorage.setItem(SessionStorage.TOKEN, token);
    } else {
      sessionStorage.removeItem(SessionStorage.TOKEN);
    }
  };

  const setSessionRefreshToken = (refreshToken: string | null) => {
    if (refreshToken) {
      sessionStorage.setItem(SessionStorage.REFRESH_TOKEN, refreshToken);
    } else {
      sessionStorage.removeItem(SessionStorage.REFRESH_TOKEN);
    }
  };

  const setTokens = (token: string, refreshToken: string) => {
    setSessionToken(token);
    setSessionRefreshToken(refreshToken);
    setAuthTokens({ refreshToken: refreshToken, token: token });
    const decodedUser = jwtDecode<CurrentUser>(token);
    setCurrentUser(decodedUser);
  };

  const signOut = () => {
    sessionStorage.removeItem(SessionStorage.REFRESH_TOKEN);
    sessionStorage.removeItem(SessionStorage.TOKEN);
    setAuthTokens({ token: null, refreshToken: null });
    setCurrentUser(null);
  };

  const refreshSession = useCallback(async () => {
    if (!authTokens.token || !authTokens.refreshToken) return;
    const decoded = jwtDecode<{ exp: number }>(authTokens.token);
    const tokenExpiration = decoded.exp;
    const expirationWithBuffer = tokenExpiration + 5 * 60;

    if (expirationWithBuffer < Date.now() / 1000) {
      const response = await mutateAsync({
        refreshToken: authTokens.refreshToken,
        token: authTokens.token,
      });

      if (response.success) {
        setAuthTokens({
          refreshToken: response.refreshToken,
          token: response.token,
        });
      }
    }
  }, [authTokens]);

  useEffect(() => {
    const interval = setInterval(() => {
      refreshSession();
    }, 2 * 60 * 1000);

    return () => clearInterval(interval);
  }, [refreshSession]);

  useEffect(() => {
    if (!currentUser && authTokens.token) {
      const decodedUser = jwtDecode<CurrentUser>(authTokens.token);
      setCurrentUser(decodedUser);
    }
  });

  const values = {
    setTokens,
    signOut,
    currentUser,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}
