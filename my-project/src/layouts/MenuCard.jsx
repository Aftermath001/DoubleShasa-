import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const MenuCard = (props) => {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  const handleLikeClick = () => {
    if (liked) {
      setCount(count - 1);
      setLiked(false);
    } else {
      setCount(count + 1);
      setLiked(true);
    }
  };

  return (
    <div className="w-50 h-64 bg-white p-3 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
      <div>
        <img
          className="w-full h-32 object-cover rounded-lg"
          src={props.img}
          alt={props.title}
        />
      </div>
      <div className="p-2 mt-3">
        <div className="flex flex-row justify-between items-center">
          <h3 className="font-semibold text-lg">{props.title}</h3>
          {props.value && <h3 className="font-semibold text-lg">{props.value}</h3>}
        </div>
        <div className="flex flex-row justify-between mt-3 items-center">
          <div className="flex items-center gap-2">
            <button
              className="px-3 text-sm border-2 border-[#AB6B2E] bg-[#FFDCAB] hover:text-[#AB6B2E] transition-all rounded-lg"
              onClick={handleLikeClick}
            >
              {liked ? "Unlike" : "Like"}
            </button>
            <span className="text-sm">{count}</span>
          </div>
          <span className="flex items-center bg-[#FFDCAB] px-3 py-2 rounded-full cursor-pointer">
            <FaShoppingCart size={18} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
