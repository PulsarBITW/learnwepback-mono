import React from "react";
import * as classes from "./styled.module.css";

import { NavLink, Outlet } from "react-router-dom";
import { ROUTES_DATA } from "../../../reactRouter/routes";
import { createCN } from "../../../utils/createClassName";

export const Layout = () => {
  return (
    <div>
      <div className={classes.linksContainer}>
        {ROUTES_DATA.map((el) => (
          <NavLink
            key={el.to}
            to={el.to}
            className={({ isActive }) =>
              isActive
                ? createCN([classes.navLink, classes.navLink_active])
                : classes.navLink
            }
          >
            {el.name}
          </NavLink>
        ))}
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
