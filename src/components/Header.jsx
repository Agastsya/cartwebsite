import React from "react";
import { Link } from "react-router-dom";
import { BiCart } from "react-icons/bi";

const Header = () => {
  return (
    <nav>
      <h1>Logo Here</h1>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/cart"}>
          <BiCart size={"24"} />
          <p>{0}</p>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
