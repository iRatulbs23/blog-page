import React, { useState } from "react";

interface CardProps {
  name: string;
  content: string;
  writter: string;
}
const Card: React.FC<CardProps> = ({ name, content, writter }) => {
  const [isLiked, setIsLiked] = useState(false);

  function handleLiked() {
    setIsLiked((prev) => !prev);
  }

  return (
    <div className="bg-gray-400 mb-4 w-1/4 rounded-md flex flex-col gap-2 cursor-pointer">
      <h4 className="text-xl font-bold text-center">{name}</h4>
      <p className="text-sm mx-2">{content}</p>
      <p className="text-center">
        Written By: <span className="font-bold">{writter}</span>
      </p>
      <button
        className={`bg-white text-black w-10 mx-auto ${
          isLiked ? "bg-black text-white" : ""
        }`}
        onClick={() => handleLiked()}
      >
        {isLiked ? "Liked" : "Like"}
      </button>
    </div>
  );
};

export default Card;
