import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { Home } from "./views/Home";

import { LogInView } from "./views/Auth/LogIn";
import { ReactElement } from "react";
import { RegisterView } from "./views/Auth/Register";
import { ResetPasswordView } from './views/Auth/ResetPassword/index';
import { GridMovies } from "./components/GridMovies";
import { Checkout } from "./components/Checkout";
import { Pay } from "./components/Pay";
import { RoutesPathsEnum } from "./helpers/RoutePaths";
import { SillasView } from "./views/Auth/cinema/Sillas";
import { Toaster } from "react-hot-toast";
p

//import { MultiplexView } from "./views/Auth/Multiplex/multiplex";
import { Home } from "./views/Home";


const App: React.FC = (): ReactElement => {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path={RoutesPathsEnum.REGISTER} element={<RegisterView />} />
          <Route path={RoutesPathsEnum.LOGIN} element={<LogInView />} />
          <Route path={RoutesPathsEnum.RESETPASSWORD} element={<ResetPasswordView />} />

          {/* Asigna MultiplexView a la ruta correspondiente */}
          <Route path={RoutesPathsEnum.HOME} element={<Home/>} />

          <Route path={RoutesPathsEnum.REGISTER}
            element={<RegisterView />}
          />
          <Route path={RoutesPathsEnum.HOME}

            element={<Home />} //CAMBIAR RUTA DEPENDIENDO DEL MODULO QUE SE DESEE VER 

          />
          <Route path={RoutesPathsEnum.LOGIN}
            element={<LogInView />}
          />
          <Route
            path={RoutesPathsEnum.RESETPASSWORD}
            element={<ResetPasswordView />}
          />
          <Route path={RoutesPathsEnum.CINEMA}
            element={<Home />}
          />
          <Route path={RoutesPathsEnum.PELICULAS}
            element={<GridMovies />}
          />
          <Route path={RoutesPathsEnum.SILLAS}
            element={<SillasView />}
          />
          <Route path={RoutesPathsEnum.CHECKOUT}
            element={<Checkout />}
          />
          <Route path={RoutesPathsEnum.PAY}
            element={<Pay />}
          />
          <Route path="*" element={<Navigate replace to="/home" />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
};

export default App;
