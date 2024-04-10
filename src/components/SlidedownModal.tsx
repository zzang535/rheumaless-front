import React from "react";

interface SlidedownModalProps {
  status: boolean;
  content: string;
}

const SlidedownModal: React.FC<SlidedownModalProps> = ({ status, content }) => {
  return (
    <div
      className="fixed w-full h-18 bg-[#f9f4e8] p-2 opacity-0 transition-opacity duration-700"
      style={{ opacity: status ? 1 : 0 }}
    >
      <div className="w-full h-full bg-white p-2 rounded-xl border border-black">
        <h1 className="text-lg">{content}</h1>
      </div>
    </div>
  );
};

export default SlidedownModal;
