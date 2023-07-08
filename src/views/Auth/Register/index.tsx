import { Form, Formik } from "formik";
import Button from "../../../components/Button";
import { ReactElement } from "react";
import TextInput from "../../../components/Input";



export const RegisterView: React.FC = (): ReactElement => {

  const handleSubmit = async (values: { userId: any; email: any; password: any; }) => {
    const data = {
      codEmpleado: values.userId,
      correoUsuario: values.email,
      contrasenaUsuario: values.password,
    };

    try {
      const response = await fetch(
        "https://webapicinepacho-cinepacho.azurewebsites.net/api/usuarios/registrar",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        // El registro fue exitoso, puedes realizar acciones adicionales aquí
        console.log("Registro exitoso");
        window.location.href = "/login";
      } else {
        // Ocurrió un error en la API, puedes manejarlo aquí
        console.log("Error en el registro");
      }
    } catch (error) {
      // Error en la comunicación con la API, puedes manejarlo aquí
      console.log("Error en la comunicación con la API");
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <img
        src="https://images.pexels.com/photos/7234212/pexels-photo-7234212.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt=""
        className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        width="1308"
      />
      <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <div className="mx-auto max-w-md">
          <h1 className="text-blue-001 font-bold lg:text-5xl text-xl">Registro</h1>
          <img
            className="w-15 h-15"
            src="https://w7.pngwing.com/pngs/924/165/png-transparent-note-and-pencil-illustration-computer-icons-icon-design-symbol-registration-miscellaneous-angle-text-thumbnail.png"
            alt="registrarce"
          />
          <div className="divide-y divide-gray-300/50">
            <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
              <p>Para continuar por favor ingrese los siguientes datos </p>

              <div className="flex-wrap ">
                <Formik
                  initialValues={{
                    userId: "",
                    email: "",
                    password: "",
                  }}
                  onSubmit={handleSubmit}
                >
                  <Form className="flex flex-col w-full">
                    <TextInput
                      type="text"
                      name="userId"
                      placeholder="IdEmpleado"
                      className="bg-blue-600 bg-opacity-30 font-bold text-black"
                    />
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
                      content="Registrarse"
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

