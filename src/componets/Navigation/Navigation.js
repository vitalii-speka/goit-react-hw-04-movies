import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <NavLink
        exact
        to={routes.home}
        className={s.navLink}
        activeClassName={s.navLinkActive}
      >
        Home
      </NavLink>

      <NavLink
        to={routes.movie}
        className={s.navLink}
        activeClassName={s.navLinkActive}
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
