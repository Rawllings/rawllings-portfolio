import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { FaUserAlt, FaBars, FaTh } from "react-icons/fa";
import {
  MdMiscellaneousServices,
  MdCastForEducation,
  MdWorkHistory,
  MdScreenSearchDesktop,
  MdPermContactCalendar,
} from "react-icons/md";
import { GiSkills } from "react-icons/gi";

function Navbar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: "/",
      name: "Landing",
      icon: <FaTh />,
    },
    {
      path: "/about",
      name: "About",
      icon: <FaUserAlt />,
    },
    {
      path: "/services",
      name: "Services",
      icon: <MdMiscellaneousServices />,
    },
    {
      path: "/skills",
      name: "Skills",
      icon: <GiSkills />,
    },
    {
      path: "/education",
      name: "Education",
      icon: <MdCastForEducation />,
    },
    {
      path: "/experience",
      name: "Experience",
      icon: <MdWorkHistory />,
    },
    {
      path: "/work",
      name: "Work",
      icon: <MdScreenSearchDesktop />,
    },
    {
      path: "/contacts",
      name: "Contacts",
      icon: <MdPermContactCalendar />,
    },
  ];
  return (
    <div className="container">
      {/* SIDEBAR/ NAVBAR  */}

      {/* logo upper side  */}
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1
            style={{ display: isOpen ? "block" : "none" }}
            className="font-extrabold text-3xl bg-yellow-400 p-5 rounded-t-none"
          >
            R
          </h1>

          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>

        {/* details side  */}

        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>

      {/* CONTENT SIDE  */}

      <div className="right__side">
        <main>{children}</main>
      </div>
    </div>
  );
}

export default Navbar;
