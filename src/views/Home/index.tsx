import GridCines from "../../components/GridCines";
import GridMovies from "../../components/GridMovies";
import {SillasView} from "../Auth/cinema/Sillas";
import { MainLayout } from '../../layouts/MainLayout';
import { ReactElement } from "react";

export const Home: React.FC = (): ReactElement => {

  return (
    <>
      <MainLayout>
        <GridCines>
          <GridMovies>
            <SillasView></SillasView>
          </GridMovies>
        </GridCines>
        {/* <GridMovies></GridMovies> */}
        {/* Hay un problema con el key del componente SillasView (abrir consola) */}
        {/* <SillasView></SillasView> */}
      </MainLayout>
      {/* <h1>Hola mundo si funciona el home</h1> */}
    </>
  );
};
