import { Outlet } from "react-router-dom";
import { useAuth } from "../../auth";
import { useRouter } from "../../routes/hooks";
import { useEffect } from "react";
import { Paths } from "../../constants";

export const Unauthorized = () => {
  const { currentUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (currentUser) {
      router.push(Paths.ROOT);
    }
  }, [currentUser]);

  return <>{!currentUser && <Outlet />}</>;
};

export default Unauthorized;
