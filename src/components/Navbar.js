import { React, useState } from "react";
import logo from "../assets/lawyer_desk_logo 1.png";
import user from "../assets/user.png";
import { NavLink } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {
  const [menuShow, setMenuShow] = useState(false);
  const handleMenuClick = () => {
    setMenuShow(!menuShow);
  };
  return (
    <header style={{ backgroundColor: "#ffcc00 " }}>
      <nav className=" md:flex  md:items-center md:justify-evenly py-3 px-5">
        <div className="flex justify-between items-center " style={{marginRight:'100px'}}>
          <img src={logo} alt="logo" className="h-11" />
          <div
            className="md:hidden flex cursor-pointer px-5"
            onClick={handleMenuClick}
          >
            <RiMenu3Fill />
          </div>
        </div>
        {/* menu items */}
        <div className={`md:min-h-fit min-h-[60vh] w-full md:w-auto ${menuShow ? "hidden" : "block" }`}>
          <ul className="flex md:flex-row flex-col ">
            <li
              className="px-4 py-2 text-black hover:text-red-600"
              style={{ fontFamily: "Open Sans", fontWeight: "600" ,marginRight:"15px"}}
            >
              <NavLink to="/News-feed">Home</NavLink>
            </li>
            <li
              className="px-4 py-2 text-black hover:text-red-600 "
              style={{ fontFamily: "Open Sans", fontWeight: "600",marginRight:"15px" }}
            >
              <NavLink to="/search-post">Find Lawyers</NavLink>
            </li>
            <li
              className="px-4 py-2 text-black hover:text-red-600"
              style={{ fontFamily: "Open Sans", fontWeight: "600",marginRight:"15px" }}
            >
              <NavLink to="/d">Legal Research</NavLink>
            </li>
            <li
              className="px-4 py-2 text-black hover:text-red-600"
              style={{ fontFamily: "Open Sans", fontWeight: "600",marginRight:"15px" }}
            >
              <NavLink to="/chat-page">Chats</NavLink>
            </li>
            <li
              className="px-4 py-2 text-black hover:text-red-600"
              style={{ fontFamily: "Open Sans", fontWeight: "600",marginRight:"15px" }}
            >
              <NavLink to="/notifications">Notifications</NavLink>
            </li>
            <li
              className="px-4 py-2 text-black hover:text-red-600"
              style={{ fontFamily: "Open Sans", fontWeight: "600",marginRight:"15px" }}
            >
              <NavLink to="/settings">Settings</NavLink>
            </li>
            <li
              className="px-4 py-2 text-black hover:text-red-600"
              style={{ fontFamily: "Open Sans", fontWeight: "600",alignItems:"flex-end",marginRight:"15px" }}
            >
              <NavLink to="/lawyer-detail">
                <img src={user} alt="Profile" className="w-9 h-9" />
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
