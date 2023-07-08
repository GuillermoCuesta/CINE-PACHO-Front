/*import { Navigate, Outlet, useLocation } from "react-router-dom";
import { ReactElement, useEffect, useState } from "react";

import { Loading } from "~/components/Loading";
import { RoutesPathsEnum } from "~/helpers/RoutePaths";
import { useAuthContext } from "~/context/AuthContext";

export const Protectedroutes: React.FC = (): ReactElement => {
  const { isAuth, getSession } = useAuthContext();
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    getSession()
      .then((session) => {
        // console.log("session:", session);
      })
      .catch((err) => {
        // console.log(err);
      })
      .finally(() => setisLoading(false));
  }, [isAuth]);

  if (isLoading) {
    return <Loading />;
  }

  if (!isAuth) {
    return <Navigate to={RoutesPathsEnum.LOGIN}></Navigate>;
  }

  return (
    <div className="w-full h-screen bg-white-001">
      <Outlet />
    </div>
  );
};*/
