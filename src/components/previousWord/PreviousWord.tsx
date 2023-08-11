import React from 'react';
import classes from './PreviousWord.module.css';
import { PrevioudWordProps } from './PreviousWordInt';

const PreviousWord = ({previousWord}: PrevioudWordProps):JSX.Element => {
  return (
    <div className={classes.previousWord}>
      <p>{previousWord}</p>
    </div>
  );
};

export default PreviousWord;