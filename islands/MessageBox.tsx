import { useState } from "preact/hooks";

type Props = {
  message: string;
  onConfirm: () => void;
};

const MessageBox = ({ message, onConfirm }: Props) => {
  const handleConfirm = () => {
    onConfirm();
  };

  return (
    <div
      className={`fixed z-10 inset-0 overflow-y-auto`}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      onClick={() => handleConfirm()}
    >
      <div className="flex items-center justify-center min-h-screen">
        <div
          className="bg-gray-900 w-1/2 rounded-lg shadow-lg px-6 py-4"
          onClick={() => event?.stopPropagation()}
        >
          <div className="text-white font-medium mb-4">{message}</div>
          <div className="flex justify-end">
            <button
              className="bg-black hover:bg-turquoise transition text-white font-medium py-2 px-4 rounded-lg"
              onClick={handleConfirm}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
