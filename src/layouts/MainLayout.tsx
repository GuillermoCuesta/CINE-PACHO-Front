import React, { ReactElement, ReactNode } from "react";

// import Navbar from "~/components/Navbar";
// import { SideBar } from "~/components/Sidebar/index";

interface Props {
  children: ReactNode;
  isPrincipalPage?: boolean;
}

export const MainLayout: React.FC<Props> = ({
  children,
  // isPrincipalPage = false,
}): ReactElement => {
  return (
    <main className="relative bg-white-001 flex flex-col">
      <div className=" w-full h-20 bg-red-500 "></div>
      <div className="children lg:pl-[25%] bg-white-001 pt-[65px] lg:ml-10 px-5 lg:px-[60px] flex flex-col gap-x-24">
        {children}
      </div>
    </main>
  );
};
