import GridCines from "../../components/GridCines";
import { MainLayout } from '../../layouts/MainLayout';
import { ReactElement } from "react";

export const Home: React.FC = (): ReactElement => {

  return (
    <>
      <MainLayout>
        <GridCines></GridCines>
      </MainLayout>
      {/* <h1>Hola mundo si funciona el home</h1> */}
    </>
  );
};
