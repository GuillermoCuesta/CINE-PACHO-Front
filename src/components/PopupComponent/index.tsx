import { XMarkIcon } from "@heroicons/react/24/outline";
import { ReactNode } from "react";
import Popup from "reactjs-popup";

interface PropsPopupComponent {
  children: ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
  onClose?: () => void;
  widthPercentage?: string;
  heightPercentage?: string;
  maxWidth?: string;
  maxHeight?: string;
}
export const PopupComponent = ({
  children,
  open,
  setOpen,
  onClose,
  widthPercentage,
  heightPercentage,
  maxWidth,
  maxHeight = "600px",
}: PropsPopupComponent) => {
  return (
    <Popup
      open={open}
      closeOnDocumentClick
      modal
      nested
      contentStyle={{
        width: widthPercentage ?? "90vw",
        height: heightPercentage ?? "70vh",
        borderRadius: "20px",
        maxWidth: maxWidth ?? "1200px",
        maxHeight: maxHeight,
      }}
      onClose={() => {
        setOpen(false);
        if (onClose) {
          onClose();
        }
      }}
    >
      <div className="flex flex-col items-center justify-center p-2 h-full relative">
        <XMarkIcon
          onClick={() => {
            setOpen(false);
          }}
          width={35}
          className=" text-blue-001 absolute top-4 right-4 cursor-pointer"
        />
        {children}
      </div>
    </Popup>
  );
};
