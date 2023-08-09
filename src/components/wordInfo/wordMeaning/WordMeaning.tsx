import React from 'react';
import { WordMeaningProps } from './WordMeaningInt';
import classes from './WordMeaning.module.css';
import HorizontalBar from '@/components/UI/horizontalBar/HorizontalBar';

const WordMeaning = ({ meaning }: WordMeaningProps): JSX.Element => {
  const { definitions } = meaning;
  return (
    <div>
      <span>Part of speech: {meaning.partOfSpeech}</span>
      {meaning.definitions.map((definition, indx) => {
        return (
          <div className={classes.wordDescription} key={definition.example + `${indx}`}>
            <span className={classes.wordText}>
              Definition: {definition.definition}
            </span>
            {definition.example ? (
              <span className={classes.wordText}>
                Example: {definition.example}
              </span>
            ) : null}
            {indx !== definitions.length - 1 ? (
              <HorizontalBar
                barStyling={{
                  height: '.1rem',
                  backgroundColor: 'var(--main-grey)',
                }}
              />
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default WordMeaning;
