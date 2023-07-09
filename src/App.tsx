import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { LogInView } from "./views/Auth/LogIn";
import { ReactElement } from "react";
import { RegisterView } from "./views/Auth/Register";
import { ResetPasswordView } from './views/Auth/ResetPassword/index';
import { SillasView } from "./views/cinema/Sillas";
import { RoutesPathsEnum } from "./helpers/RoutePaths";
import { Toaster } from "react-hot-toast";
import { Home } from "./views/Home";

const App: React.FC = (): ReactElement => {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path={RoutesPathsEnum.REGISTER}
            element={<RegisterView/>}
            />
          <Route path={RoutesPathsEnum.HOME}

            element={<RegisterView/>} //CAMBIAR RUTA DEPENDIENDO DEL MODULO QUE SE DESEE VER 

          />
          <Route path={RoutesPathsEnum.LOGIN}
            element={<LogInView/>}
          />
          <Route
            path={RoutesPathsEnum.RESETPASSWORD}
            element={<ResetPasswordView/>}
          />
          <Route path="*" element={<Navigate replace to="/auth/login" />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
};

export default App;
