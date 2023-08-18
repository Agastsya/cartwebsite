import React from "react";
import { Link } from "react-router-dom";
import { BiCart } from "react-icons/bi";
import { useSelector } from "react-redux";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <nav>
      <h1>Logo Here</h1>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/cart"}>
          <BiCart size={"24"} />
          <p>{cartItems.length}</p>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
