import {
  CalendarDaysIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { ReactElement, ReactNode, useState } from "react";

import InputField from "../Input";

interface PropsInputItem {
  title?: string;
  type: string;
  name: string;
  disabled?: boolean;
  icon?: ReactNode;
  iconForce?: boolean;
  bgcolor?: string;
  border?: string;
  titleColor?: string;
  helperText?: string;
  placeHolder?: string;
  centerText?: string;
  maxWidth?: string;

}

export const InputItem = ({
  title,
  type,
  name,
  disabled,
  icon,
  bgcolor,
  border,
  titleColor,
  helperText,
  placeHolder,
  centerText,
  maxWidth,

}: PropsInputItem): ReactElement => {
  const [showHelperText, setShowHelperText] = useState(false);

  return (
    <div className={`relative xl:min-w-[100px] ${maxWidth ? maxWidth : 'max-w-[350px]'} w-full`}>
      {title ? (
        <div className="flex justify-start mx-2 gap-x-2">
          <h2
            className={`${titleColor ?? "text-blue-001 font-bold "
              } text-sm max-w-[150px] whitespace-nowrap`}
          >
            {title}
          </h2>
          {helperText && (
            <InformationCircleIcon
              width={20}
              className="text-blue-001"
              onMouseEnter={() => setShowHelperText(true)}
              onMouseLeave={() => setShowHelperText(false)}
            />
          )}
        </div>
      ) : null}
      <div className="relative flex items-center w-full">
        <InputField
          type={type}
          name={name}
          placeholder={placeHolder}
          className={`${bgcolor ?? disabled
              ? "bg-white-001 border-[0.1px] border-blue-004 "
              : "bg-blue-004"
            } ${type == 'date' ? 'w-[100vw]' : 'w-full'}  h-12 text-blue-001 text-sm font-medium focus:border-blue-001 focus:border-2 items-center justify-center ${border} ${centerText} ${icon ? "pl-10" : ""
            } ${title ? "mt-2" : ""}`}
          disabled={disabled ?? false}
        />
        {/* {(!disabled || iconForce) && ( */}
        <div>
          {icon}
          {type === "date" && (
            <CalendarDaysIcon
              width={15}
              className="absolute right-5 top-[22px] pointer-events-none text-blue-001"
            />
          )}
        </div>
        {/* )} */}
      </div>
      {showHelperText && (
        <div className="absolute z-50 -top-48 -left-32 bg-white py-8 px-5 shadow-card rounded-xl max-w-[379px]">
          <h2 className="text-blue-002 font-bold text-xl mb-2">
            {title ? title : ""}
          </h2>
          <p className="font-light text-sm">
            {helperText ? helperText : ""}

          </p>
        </div>
      )}
    </div>
  );
};
