import React from "react";
import "../styles.css";
const Header = () => {
  return (
    <div className="header">
      <img
        // src={require("../assets/logo.png")}
        src="logo.png"
        alt="MovieDux Logo"
        className="logo"
      />
      <h2 className="app-subtitle">
        It't time for popcorn! Find your next movie here.
      </h2>
    </div>
  );
};

export default Header;
