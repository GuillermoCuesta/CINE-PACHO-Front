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
    <main className="relative bg-white-001">
      {/* <SideBar isPrincipalPage={isPrincipalPage} /> */}
      <div className="children lg:pl-[25%] bg-white-001 pt-[65px] lg:ml-10 px-5 lg:px-[60px] flex flex-col gap-x-24">
        {children}
      </div>

      <div className="flex flex-col fixed right-[0px] top-0 items-end gap-6 w-full lg:w-3/4 bg-white-001  lg:bg-opacity-100 h-auto lg:pr-[60px]">
        {/* <Navbar /> */}
      </div>
    </main>
  );
};
