import { ClassAttributes, InputHTMLAttributes, useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
// Formik
import { Field, FieldConfig, useField } from "formik";

interface InputProps {
  className?: string;
  cols: number;
  rows: number;
  title: string;
}

const InputArea = ({
  cols,
  rows,
  title,
  ...props
}: ClassAttributes<HTMLInputElement> &
  InputHTMLAttributes<HTMLInputElement> &
  FieldConfig<unknown> &
  InputProps): JSX.Element => {

  const [field, meta] = useField(props);
  const [showPassword, setShowPassword] = useState(false);
  props = {
    ...props,
    type:
      props.type === "password"
        ? showPassword
          ? "text"
          : "password"
        : props.type,
  };
  return (
    <div className="flex flex-col w-full mb-5 justify-center max-w-[350px] lg:max-w-full">
      <div className="flex flex-col w-full relative">
        {title ? (
          <div className="flex justify-between mx-2">
            <h2
              className={`text-blue-001 font-bold text-sm max-w-[150px] whitespace-nowrap`}
            >
              {title}
            </h2>
          </div>
        ) : null}
        <Field
          as="textarea"
          className={`text-blue-001 text-sm p-4 font-medium bg-blue-004 rounded-xl w-full mt-2 mb-2 outline-none focus:border-blue-001 focus:border-2 border-4 ${
            meta.error ? "border-red-error" : "border-blue-004"
          } ${
            props.disabled
              ? "bg-white-001 border-[0.1px] border-blue-004 "
              : "bg-blue-004"
          }`}
          rows={rows}
          cols={cols}
          {...field}
          {...props}
          autoComplete="false"
        />

        {props.name.toLowerCase().includes("password") ? (
          <div onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <EyeSlashIcon
                width={20}
                className="absolute right-10 bottom-5 text-blue-001"
              />
            ) : (
              <EyeIcon
                width={20}
                className="absolute right-10 bottom-5 text-blue-001"
              />
            )}
          </div>
        ) : null}
      </div>
      {meta.error && (
        <span className="text-xs text-red-error"> {meta.error} </span>
      )}
    </div>
  );
};

export default InputArea;
