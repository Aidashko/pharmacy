import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <img src="/assets/Walgreens-logo.png" alt="" />
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Team</h4>
            <ui className="list-unstyled">
              <li>BEN - Project Head</li>
              <li>IVAN - Designer</li>
              <li>RIKA - SMM</li>
              <li>KRISTINE - Assistant</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>PRIVACY POLICY</h4>
            <ui className="list-unstyled">
              <li>© Copyright 2021-2022 </li>
              <li>All rights reserved. Powered by 1ATH.Studio</li>
              <li>Contact us:</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} THICC MEMES | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
