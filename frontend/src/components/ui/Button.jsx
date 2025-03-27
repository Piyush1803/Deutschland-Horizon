import React from "react";

const Button = ({ children, className, ...props }) => {
  return (
    <button className={`px-6 py-3 text-lg rounded-full bg-blue-600 hover:bg-blue-700 text-white ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
