import React from "react";
import "./headerStyles.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h3>Catalog</h3>
      <ul className="links">
        <li>
          <Link className="link" to={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to={"/cards"}>
            Cards
          </Link>
        </li>
        <li>
          <Link className="link" to={"/forms"}>
            Forms
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
