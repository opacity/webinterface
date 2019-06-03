import React from "react";
import MDSpinner from "react-md-spinner";

const Spinner = ({ isActive }) => {
  return isActive ? (
    <MDSpinner
      color1={"#2e6dde"}
      color2={"#2e6dde"}
      color3={"#2e6dde"}
      color4={"#2e6dde"}
    />
  ) : null;
};

export default Spinner;
