import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
      <header className={s.header}>
        <img src="https://cdn.freelogodesign.org/files/ae6e9d81edb4466f99458bde0096b2ea/thumb/logo_200x200.png?v=638179421600000000"
             alt="logo"/>
      </header>
  );
};

export default Header;