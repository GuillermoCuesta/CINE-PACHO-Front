import { Form, Formik } from "formik";

import Button from "../../../components/Button";
import { ReactElement } from "react";
import TextInput from '../../../components/Input';

// import { useNavigate } from "react-router-dom";
// import { useToast } from "../../../hooks/useToast";

export const LogInView: React.FC = (): ReactElement => {

  // const toast = useToast();
  // const navigate = useNavigate();

  return (
    <div className="w-full h-full flex lg:justify-center justify-end lg:items-center bg-white flex-col-reverse lg:flex-row">
      <div className="lg:w-1/2 w-full flex justify-center items-center mt-6 lg:mt-0">
      <div className="flex flex-col gap-10 items-center w-full">
            <h1 className="text-blue-001 font-bold lg:text-5xl text-xl">¡Bienvenid@!</h1>
            <h4 className="text-blue-001 text-lg font-thin w-1/2 text-center">
              Es la primera vez que te vemos por acá, por favor actualiza tu
              contraseña
            </h4>
            <Formik
              initialValues={{}}
              // eslint-disable-next-line @typescript-eslint/no-empty-function
              onSubmit={() =>{}}
              // validationSchema={}
            >
              <Form className="flex flex-col w-full px-6 md:px-24 lg:px-36 xl:px-44">
                <TextInput
                  type="email"
                  name="email"
                  placeholder="Correo electrónico"
                  className="bg-blue-003 bg-opacity-30 font-bold text-gray-001"
                />
                <TextInput
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                  className="bg-blue-003 bg-opacity-30 font-bold text-gray-001"
                />

                <Button
                  buttonType="bluePrimary"
                  content="login"
                  type="submit"
                />
              </Form>
            </Formik>
          </div>
      </div>
      <div className="lg:w-1/2 w-full">
      </div>
    </div>
  );
};
