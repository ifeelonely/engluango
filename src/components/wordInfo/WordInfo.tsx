import React from 'react';
import ContentBox from '../contentBox/ContentBox';
import { WordInfoProps } from './WordInfoInt';
import classes from './WordInfo.module.css';
import { AiTwotoneSound } from 'react-icons/ai';
import { GiSoundOff } from 'react-icons/gi';
import HorizontalBar from '../UI/horizontalBar/HorizontalBar';
import WordMeaning from './wordMeaning/WordMeaning';
import useSound from 'use-sound';

const WordInfo = ({ wordInfo }: WordInfoProps): JSX.Element => {
  const { word, phonetic, meanings, phonetics } = wordInfo[0];
  const { audio } = phonetics[0];
  const [playSound] = useSound(audio);

  return (
    <ContentBox>
      <div className={classes.wordInfo}>
        <div>
          <h2>Word: {word}</h2>
        </div>
        <div>
          <span>Pronunciation: {phonetic}, </span>
          <span>
            {audio ? (
              <AiTwotoneSound
                className={classes.soundIcon}
                onClick={() => playSound()}
              />
            ) : (
              <span>
                <GiSoundOff className={classes.soundIcon} />
                <span>{'(No sound was found)'}</span>
              </span>
            )}
          </span>
        </div>
      </div>
      <HorizontalBar />
      {meanings.map((meaning, indx) => (
        <div key={indx}>
          <WordMeaning meaning={meaning} />
          <HorizontalBar />
        </div>
      ))}
    </ContentBox>
  );
};

export default WordInfo;
