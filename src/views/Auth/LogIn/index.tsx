import { Form, Formik } from "formik";
import Button from "../../../components/Button";
import { ReactElement } from "react";
import TextInput from "../../../components/Input";


export const LogInView: React.FC = (): ReactElement => {
  const handleSubmit = async (values: { email: any; password: any; }) => {
    const data = {
      correoUsuario: values.email,
      contrasenaUsuario: values.password,
    };

    try {
      const response = await fetch(
        "https://webapicinepacho-cinepacho.azurewebsites.net/api/usuarios/iniciar-sesion",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        // El inicio de sesión fue exitoso
        console.log("Inicio de sesión exitoso");  
        
        window.location.href = "https://cine-pacho-4e8d3.web.app/auth/multiplex";      
      } else if (response.status === 400) {
        // Credenciales inválidas
        console.log("Credenciales de inicio de sesión inválidas");
      } else {
        // Otro error
        console.log("Error en el inicio de sesión");
      }
    } catch (error) {
      // Error en la comunicación con la API
      console.log("Error en la comunicación con la API");
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <img
        src="https://images.pexels.com/photos/57043/pexels-photo-57043.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt=""
        className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        width="1308"
      />
      <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <div className="mx-auto max-w-md">
          <h1 className="text-blue-001 font-bold lg:text-5xl text-xl">¡Bienvenid@!</h1>
          <div className="divide-y divide-gray-300/50">
            <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
              <p>Por favor ingrese sus credenciales para continuar </p>

              <div className="flex-wrap ">
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                  onSubmit={handleSubmit}
                >
                  <Form className="flex flex-col w-full">
                    <TextInput
                      type="email"
                      name="email"
                      placeholder="Correo electrónico"
                      className="bg-blue-600 bg-opacity-30 font-bold text-black"
                    />
                    <TextInput
                      type="password"
                      name="password"
                      placeholder="Contraseña"
                      className="bg-blue-600 bg-opacity-30 font-bold text-black"
                    />

                    <Button
                      buttonType="bluePrimary"
                      content="Entrar"
                      type="submit"
                    />
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
