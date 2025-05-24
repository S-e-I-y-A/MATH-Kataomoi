import React from "react";
import "./Footer.css";
import logo from "../public/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-center">
        <img src={logo} alt="ロゴ" className="footer-logo" />
        <ul className="names">
          <li>
            <p>MATH-KATAOMOI</p>
            <li>JOU</li>
            <li>SEIYA</li>
            <li>KAINE</li>
            <li>RISA</li>
          </li>
        </ul>
      </div>
      {/* <ul className="social-media"></ul> */}
    </footer>
  );
};
export default Footer;
