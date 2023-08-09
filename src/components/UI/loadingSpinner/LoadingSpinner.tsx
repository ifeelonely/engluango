import React from 'react';
import { ImSpinner10 } from 'react-icons/im/';
import classes from './LoadingSpinner.module.css';

const LoadingSpinner = (): JSX.Element => {
  return (
    <div>
      <ImSpinner10 className={classes.loadingSpinner} />
    </div>
  );
};

export default LoadingSpinner;
