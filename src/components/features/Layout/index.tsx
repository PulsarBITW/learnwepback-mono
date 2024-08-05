// import React from "react";
import * as classes from './styled.module.css';

import {NavLink, Outlet} from 'react-router-dom';
import {ROUTES_DATA} from '@/reactRouter/routes';
import {createCN} from '@/utils/createClassName';
import {useEffect} from 'react';

export const Layout = () => {
  // TODO fix url for pg deploy
  console.log('BASE_URL equals', process.env.BASE_URL);
  console.log('BUILD_MODE equals', process.env.BUILD_MODE);
  const abc = 10;

  useEffect(() => {
    console.log(abc);
  }, []);

  return (
    <div>
      <div className={classes.linksContainer}>
        {ROUTES_DATA.map((el) => (
          <NavLink
            key={el.to}
            to={el.to}
            className={({isActive}) =>
              isActive ? createCN([classes.navLink, classes.navLink_active]) : classes.navLink
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
