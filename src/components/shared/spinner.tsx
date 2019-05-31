import React from "react";
import MDSpinner from "react-md-spinner";

const Spinner = ({ isActive, className }) => {
  return isActive ? (
    <MDSpinner
      color1={"#2e6dde"}
      color2={"#2e6dde"}
      color3={"#2e6dde"}
      color4={"#2e6dde"}
      className={className}
    />
  ) : null;
};

export default Spinner;
