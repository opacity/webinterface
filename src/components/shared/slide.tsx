import React from "react";

const Slide = ({ children, title }: any) => {
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
