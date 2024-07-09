import React, { useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "./ModalContent";

const AddCard = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="bg-gray-400 mb-4 w-1/4 rounded-md flex flex-col justify-center items-center cursor-pointer">
      <div
        className="text-6xl font-bold text-center"
        onClick={() => setShowModal(true)}
      >
        +
      </div>
      {showModal &&
        createPortal(
          <ModalContent onClose={() => setShowModal(false)} />,
          document.body
        )}
    </div>
  );
};

export default AddCard;
