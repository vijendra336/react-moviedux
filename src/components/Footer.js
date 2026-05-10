import React from "react";
import "../styles.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <p className="footer-text">
        Footer Content :Copyright © {currentYear} MovieDux. All rights reserved.
      </p>
    </div>
  );
}
