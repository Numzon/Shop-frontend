import { Outlet } from "react-router-dom";
import { useAuth } from "../../auth";
import { useEffect } from "react";
import { useRouter } from "../../routes/hooks";
import { Paths } from "../../constants";

export const Authorized = () => {
  const { currentUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push(Paths.SIGN_IN);
    }
  }, [currentUser]);

  return <>{currentUser && <Outlet />}</>;
};

export default Authorized;
