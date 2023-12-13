import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} PROYECTO Aguilar Morejón Camila Madeleine | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;