import React from "react";

const ICON_TANGLE_UP = require("../../assets/images/icon_tangle_up.png");

const Slide = ({ children, title, image }: any) => {
  return (
    <section className="slide">
      <div className="container indented-container">
        <div className="slide-body">
          <h1 className="slide-title">{title}</h1>
          <hr className="underline" />
          {children}
        </div>
      </div>
    </section>
  );
};

export default Slide;
