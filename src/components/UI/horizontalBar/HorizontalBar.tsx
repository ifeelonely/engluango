import React from 'react';
import classes from './HorizontalBar.module.css';
import { HorizontalBarProps } from './HorizontalBarInt';

const HorizontalBar = ({ barClasses = [], barStyling }: HorizontalBarProps): JSX.Element => {
  return (
    <div style={{...barStyling}} className={`${classes.horizontalBar} ${barClasses.join('')}`}></div>
  );
};

export default HorizontalBar;
