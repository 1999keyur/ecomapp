import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useState } from "react";
import Cart from "../Cart/Cart";
import "./Navbar.scss";

const Navbar = () => {

  const [cart, setCart] = useState(false);
  return (
    <div className="navbar">
        <div className="wrapper">
          <div className="left">
            <div className="item">
              <img src="/img/en.png" alt="" />
              <KeyboardArrowDownIcon />
            </div>
            <div className="item">
              <span>USD</span>
              <KeyboardArrowDownIcon />
            </div>
            <div className="item">
              <Link className="link" to="/category/men">
                Men
              </Link>
            </div>
            <div className="item">
              <Link className="link" to="/category/women">
                Women
              </Link>
            </div>
            <div className="item">
              <Link className="link" to="/category/children">
                Children
              </Link>
            </div>
          </div>
          <div className="center">
            <div className="item">
              <Link className="link" to="/">
                ECOMAPP
              </Link>
            </div>
          </div>
          <div className="right">
            <div className="item">
              <Link className="link" to="/">
                HomePage
              </Link>
            </div>
            <div className="item">
              <Link className="link" to="/">
                AboutUs
              </Link>
            </div>
            <div className="item">
              <Link className="link" to="/">
                ContactUs
              </Link>
            </div>

            <div className="icons">
              <SearchIcon />
              <PersonOutlineIcon />
              <FavoriteBorderIcon />
              <div className="carticon" onClick={()=>setCart(!cart)}>
                <ShoppingCartOutlinedIcon />
                <span>0</span>
              </div>
            </div>
          </div>
        </div>
        {cart && <Cart/>}

    </div>
  );
};

export default Navbar;
