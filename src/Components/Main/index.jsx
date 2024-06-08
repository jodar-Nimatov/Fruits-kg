import React from "react";
import Header from "../Header/header";

const index = () => {
  return (
    <div>
      <div className="main-menu">
        <div className="container">
          <Header />
          <div className="main-logo"></div>
          <div className="main-left"></div>
          <div className="main-right"></div>
        </div>
      </div>
    </div>
  );
};

export default index;
