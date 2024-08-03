import React from "react";
import { FiSearch } from "react-icons/fi";
import { RiUser3Line } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
function Navbar({ setSignupPopUp }) {
  return (
    <nav>
      <Link to="/" className="logo">
        Memesland
      </Link>
      <ul>
        <li>
          <Link to="/">Find Memes</Link>
          {/* <IoIosArrowDown className="arr" /> */}
        </li>
        <li>
          <Link to="/memers">Hire Memers</Link>
        </li>

        {/* <li>
            <a href="">Login</a>
          </li> */}
        <li>
          <Link
            to="signup"
            onClick={(e) => {
              e.preventDefault();
              setSignupPopUp(true);
            }}
          >
            Sign in
            {/* <RiUser3Line className="icon" /> */}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
