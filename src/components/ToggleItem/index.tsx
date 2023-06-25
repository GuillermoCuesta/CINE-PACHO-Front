import React, { ReactElement } from "react";

interface PropsToggleItem {
  active: boolean;
  setActive?: React.Dispatch<React.SetStateAction<boolean>> | null;
}

export const ToggleItem = ({
  active,
  setActive,
}: PropsToggleItem): ReactElement => {
  return (
    <div
      className={`w-20 h-10 rounded-full  border-blue-001 border-2 flex items-center transition duration-300 focus:outline-none shadow hover:cursor-pointer mt-4 mb-6 ${
        active ? "bg-blue-001 bg-opacity-30" : "bg-white "
      }`}
      onClick={() => (setActive ? setActive(!active) : null)}
    >
      <div
        className={`w-8 h-8 relative rounded-full transition duration-500 transform bg-blue-001 p-1 text-white ${
          active ? "translate-x-10" : "translate-x-1 "
        }`}
      ></div>
    </div>
  );
};
