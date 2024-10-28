import React from 'react';
import { PreviousWordsListProps } from './PreviousWordsListInt';
import PreviousWord from '../previousWord/PreviousWord';
import classes from './PreviousWords.module.css';

const PreviousWordsList = ({
  previousWords,
  onPrevWordSearch,
}: PreviousWordsListProps): JSX.Element => {
  return (
    <div className={classes.previousWordsList}>
      {previousWords.map((previousWord, indx) => (
        <PreviousWord previousWord={previousWord} key={indx} onPrevWordSearch={onPrevWordSearch}  />
      ))}
    </div>
  );
};

export default PreviousWordsList;
