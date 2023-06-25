import { ReactElement, ReactNode } from "react";

interface PropsModal {
  setShowModal: (showModal: boolean) => void;
  children: ReactNode;
  showClose?: boolean;
  width?: string;
  height?: string;
}

export const Modal = ({
  children,
  setShowModal,
  showClose,
}: PropsModal): ReactElement => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-30">
        <div className="relative my-6 mx-auto w-10/12 md:w-9/12 xl:w-7/12">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {(showClose ?? true) && (
              <button
                className="px-3 py-2 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold"
                onClick={() => setShowModal(false)}
              >
                <span className="text-blue-001 text-4xl pr-5">x</span>
              </button>
            )}
            {/*body*/}

            {children}
          </div>
        </div>
      </div>
    </>
  );
};
