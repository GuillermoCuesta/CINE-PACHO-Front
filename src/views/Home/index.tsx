import {GridCines} from "../../components/GridCines";
import {GridMovies} from "../../components/GridMovies";
import {SillasView} from "../Auth/cinema/Sillas";
import {Checkout} from "../../components/Checkout";
import { MainLayout } from '../../layouts/MainLayout';
import { ReactElement } from "react";

export const Home: React.FC = (): ReactElement => {

  return (
    <>
      <MainLayout>
        <GridCines>
          <GridMovies>
            <SillasView></SillasView>
            <Checkout></Checkout>
          </GridMovies>
        </GridCines>
      </MainLayout>
    </>
  );
};
