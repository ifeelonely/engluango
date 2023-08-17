import React from 'react';
import classes from './PreviousWord.module.css';
import { PrevioudWordProps } from './PreviousWordInt';

const PreviousWord = ({
  previousWord,
  onPrevWordSearch,
}: PrevioudWordProps): JSX.Element => {
  return (
    <div
      className={classes.previousWord}
      onClick={() => onPrevWordSearch(previousWord)}
    >
      <p>{previousWord}</p>
    </div>
  );
};

export default PreviousWord;
