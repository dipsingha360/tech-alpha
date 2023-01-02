import React from "react";

const Footer = () => {
  return (
    <div className="footer bg-teal-500 text-teal-50 text-center py-10">
      <p>&copy; {new Date().getFullYear} Tech Alpha. All rights reserved. </p>
    </div>
  );
};

export default Footer;
