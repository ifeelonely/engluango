import React from 'react';
import { PreviousWordsListProps } from './PreviousWordsListInt';
import PreviousWord from '../previousWord/PreviousWord';
import classes from './PreviousWords.module.css';

const PreviousWordsList = ({
  previousWords,
}: PreviousWordsListProps): JSX.Element => {
  return (
    <div className={classes.previousWordsList}>
      {previousWords.map((previousWord, indx) => (
        <PreviousWord previousWord={previousWord} key={indx} />
      ))}
    </div>
  );
};

export default PreviousWordsList;
