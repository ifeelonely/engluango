import React from 'react';
import { SideBarProps } from './SideBarInt';
import classes from './SideBar.module.css';

const SideBar = ({children}: SideBarProps):JSX.Element => {
  return (
    <section className={classes.sideBar}>
      <div className={classes.sideBarInner}>
        {children}
      </div>
    </section>
  );
};

export default SideBar;