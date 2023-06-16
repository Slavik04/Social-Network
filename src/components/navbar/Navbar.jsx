import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Navbar.module.css"

const Navbar = () => {
  return (
      <nav className={s.nav}>
        <div className={s.item}>
          <NavLink
              to="profile" className={({isActive}) =>
              isActive ? "active" : ""
          }
              style={({isActive, isPending}) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "#d9dde2" : "#d9dde2",
                  border: isActive ? "1px solid #192330" : "",
                  borderRadius: isActive ? "6px" : "",
                  backgroundColor: isActive ? "#192330" : "",
                };
              }}
          >
            Profile
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink
              to="messages"
              className={({isActive}) =>
                  isActive ? "active" : ""
              }
              style={({isActive, isPending}) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "#d9dde2" : "#d9dde2",
                  border: isActive ? "1px solid #192330" : "",
                  borderRadius: isActive ? "6px" : "",
                  backgroundColor: isActive ? "#192330" : "",
                };
              }}
          >
            Messages
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink
              to="/news" className={({isActive}) =>
              isActive ? "active" : ""
          }
          >
            News
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink
              to="/music" className={({isActive}) =>
              isActive ? "active" : ""
          }
          >
            Music
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink
              to="/settings" className={({isActive}) =>
              isActive ? "active" : ""
          }
          >
            Settings
          </NavLink>
        </div>
      </nav>
  );
};

export default Navbar;