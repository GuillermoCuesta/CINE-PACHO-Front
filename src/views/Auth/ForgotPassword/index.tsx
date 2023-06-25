import { ForgotEmailValidator, ResetPassword } from "~/helpers/SchemaValidate";
import { Form, Formik } from "formik";
import { ReactElement, useState } from "react";
import { getValidateEmail, sendRecoverPasswordEmail } from "~/services/user";
// Config functions
import { resetPassword, sendCode } from "./config";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Button from "~/components/Button";
// Animation Login
import Carrousel from "~/components/Carrousel";
import { RoutesPathsEnum } from "~/helpers/RoutePaths";
// Formik
import TextInput from "~/components/Input";
// Hooks
import { useNavigate } from "react-router-dom";
import { useToast } from "~/hooks/useToast";
import { useIntl } from "react-intl";

interface userValues {
  email: string;
}

interface resetPasswordValues {
  code: string;
  password: string;
  confirmpassword: string;
}

export const ForgotPassword: React.FC = (): ReactElement => {
  const [email, setEmail] = useState("");
  const toast = useToast();
  const navigate = useNavigate();
  const [stage, setStage] = useState<number>(1);
  const emailValues: userValues = { email: "" };
  const [loading, setLoading] = useState(true);
  const resetValues: resetPasswordValues = {
    code: "",
    password: "",
    confirmpassword: "",
  };
  const intl = useIntl();

  const handleSendCode = (values: userValues): void => {
    setEmail(values.email);
    validateEmail().then((status) => {
      if (status === true) {
        sendRecoverPasswordEmail(values.email)
          .then((res) => {
            // console.log(res);
            setStage(2);
            toast.success(`${intl.formatMessage({ id: 'sendCode' })} ${email}`);

            return res;
          })
          .catch((err) => {
            toast.error(intl.formatMessage({ id: 'sendCodeError' }));
            return err;
          });
      } else {
        toast.error(intl.formatMessage({ id: 'emailNotExist' }));
      }
    });
  };

  const handleResetPassword = (values: resetPasswordValues): void => {
    resetPassword(values.code, values.password, values.confirmpassword, email)
      .then(() => {
        navigate(RoutesPathsEnum.LOGIN);
        toast.success(intl.formatMessage({ id: 'welcomeLogin' }));
      })
      .catch((err) => {
        toast.error(intl.formatMessage({ id: 'updatePasswordError' }));
        return err;
      });
  };

  const handleResendCode = (): void => {
    sendCode(email)
      .then((res) => {
        // console.log('onSuccess', res);
        toast.success(`${intl.formatMessage({ id: 'sendCode' })} ${email}`);
      })
      .catch(() => toast.error(intl.formatMessage({ id: 'sendCodeError' })));
  };

  async function validateEmail(): Promise<boolean> {
    setLoading(true);
    const info = await getValidateEmail(email);
    // console.log(info);
    setLoading(false);
    return info.status;
  }

  return (
    <div className="w-full h-full flex lg:justify-center justify-end lg:items-center bg-white flex-col-reverse lg:flex-row">
      {stage === 1 && (
        <div className="lg:w-1/2 w-full h-screen flex flex-col lg:justify-center items-center text-center mt-6">
          <div
            onClick={() => navigate(-1)}
            className="w-auto text-blue-001 font-extrabold mt-[20px] absolute lg:top-0 bottom-5 left-4 hover:cursor-pointer"
          >
            <ArrowLeftIcon width={30} />
          </div>
          <Formik
            initialValues={emailValues}
            onSubmit={(values) => handleSendCode(values)}
            validationSchema={ForgotEmailValidator}
          >
            <Form className="flex flex-col w-full px-6 md:px-12 lg:px-24 xl:px-36">
              <h1 className="text-blue-001 lg:text-4xl text-2xl font-bold mb-8">
                ¿Olvidaste tu contraseña?
              </h1>
              <section className="lg:mb-16 mb-12">
                <span className="text-blue-001 font-normal text-sm">
                  Escribe tu email. Te enviaremos un código de recuperación para
                  que puedas
                  <span className="font-semibold">
                    {" "}
                    reestablecer tu contraseña{" "}
                  </span>
                </span>
              </section>
              <TextInput
                type="email"
                name="email"
                placeholder="Correo electrónico"
                className="bg-blue-003 bg-opacity-30 font-bold text-gray-001"
              />
              <Button
                type="submit"
                buttonType="bluePrimary"
                content="Recuperar contraseña"
              />
            </Form>
          </Formik>
        </div>
      )}
      {stage === 2 && (
        <div className="lg:w-1/2 w h-screen flex lg:justify-center items-center text-center mt-6">
          <Formik
            initialValues={resetValues}
            onSubmit={(values) => handleResetPassword(values)}
            validationSchema={ResetPassword}
          >
            <Form className="flex flex-col w-full px-6 md:px-12 lg:px-24 xl:px-36">
              <h1 className="text-blue-001 lg:text-3xl text-xl font-bold mb-6">
                ¡Se envió el correo con código de recuperación!
              </h1>
              <section className="mb-8 flex flex-col">
                <h3 className="text-purple-005 text-start font-bold text-sm lg:text-base">
                  Código de verificación
                </h3>
                <TextInput
                  type="text"
                  name="code"
                  placeholder="Escribe el código de verificación"
                  className="bg-transparent font-bold text-white border-blue-002 rounded-xl p-4 outline-none border-[0.5px]"
                />
                <span className="text-blue-001 text-end text-sm">
                  ¿No lo recibíste?{" "}
                  <span
                    className="font-semibold cursor-pointer"
                    onClick={handleResendCode}
                  >
                    Reenviar correo
                  </span>
                </span>
              </section>

              <section className="flex flex-col mb-5">
                <h3 className="text-purple-005 text-start font-bold text-sm lg:text-base">
                  Nueva contraseña
                </h3>
                <span className="text-start text-blue-001 text-sm mb-4">
                  Debe contar con 8 letras, máyuscula, número y carácter
                  especial
                </span>
                <TextInput
                  type="password"
                  name="password"
                  placeholder="Nueva contraseña"
                  className="bg-blue-003 bg-opacity-30 font-bold text-gray-001"
                />
                <TextInput
                  type="password"
                  name="confirmpassword"
                  placeholder="Confirmar contraseña"
                  className="bg-blue-003 bg-opacity-30 font-bold text-gray-001"
                />
                <Button buttonType="bluePrimary" content={"save"} />
              </section>
            </Form>
          </Formik>
        </div>
      )}

      <div className="lg:w-1/2 w-full">
        <Carrousel />
      </div>
    </div>
  );
};
