import React from "react";

function Button(props) {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins capitalize font-medium text-[18px] text-primary outline-none rounded-xl ${props.styles}`}
    >
      get started
    </button>
  );
}

export default Button;
