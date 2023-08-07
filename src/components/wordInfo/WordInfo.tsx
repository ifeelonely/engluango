import React from 'react';
import ContentBox from '../contentBox/ContentBox';
import { WordInfoProps } from './WordInfoInt';
import classes from './WordInfo.module.css';
import { AiTwotoneSound } from 'react-icons/ai';
import HorizontalBar from '../UI/horizontalBar/HorizontalBar';
import WordMeaning from './wordMeaning/WordMeaning';

const WordInfo = ({ wordInfo }: WordInfoProps): JSX.Element => {
  console.log(wordInfo);
  const { word, phonetic, meanings } = wordInfo[0];
  const [firstMeaning] = meanings;
  const { partOfSpeech, definitions } = firstMeaning;
  const { definition, example = '' } = definitions[0];
  console.log(meanings)

  return (
    <ContentBox>
      <div className={classes.wordInfo}>
        <div>
          <h2>Word: {word}</h2>
        </div>
        <div>
          <span>Pronunciation: {phonetic}, </span>
          <span>
            <AiTwotoneSound className={classes.soundIcon} />
          </span>
        </div>
      </div>
      <HorizontalBar />
      {meanings.map((meaning, indx) => (
        <>
          <WordMeaning key={indx} meaning={meaning} />
          <HorizontalBar />
        </>
      ))}
    </ContentBox>
  );
};

export default WordInfo;
