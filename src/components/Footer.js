import React from "react";

const Footer = () => {
  let footerdate = new Date().getFullYear();
  return (
    <div>
      <footer>
        <p>copyright © {footerdate}</p>
      </footer>
    </div>
  );
};

export default Footer;
