import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ButtonToTop = () => {
  return (
    <button
      onClick={() => scrollTo(0, 0)}
      className="fixed bottom-5 right-5 px-5 py-5 text-white duration-150 bg-[--main-color] rounded-lg hover:bg-[--hover-color] active:bg-blue-500"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <FontAwesomeIcon icon={faArrowUp} />
      </svg>
    </button>
  );
};

export default ButtonToTop;
