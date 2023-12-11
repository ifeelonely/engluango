'use client';
import React, { SyntheticEvent, useEffect, useState } from 'react';
import SideBar from '../sideBar/SideBar';
import SearchBar from '../UI/searchBar/SearchBar';
import classes from './DictionaryInner.module.css';
import { dictionaryAPI } from '@/services/DictionaryService';
import { CustomButton } from '../UI/button/CustomButton';
import ContentBox from '../contentBox/ContentBox';
import WordInfo from '../wordInfo/WordInfo';
import LoadingSpinner from '../UI/loadingSpinner/LoadingSpinner';
import {
  getPreviousWords,
  setNewPreviousWord,
} from '@/helpers/EditPreviousWordsLocalStorage';
import PreviousWordsList from '../previousWordsList/PreviousWordsList';

const DictionaryInner = (): JSX.Element => {
  const [wordInputQuery, setWordInputQuery] = useState<string>('');
  const [previousWords, setPreviousWords] = useState<string[]>([]);
  const [trigger, { data, isFetching, error }] =
    dictionaryAPI.useLazyFetchWordQuery();

  const handleOnInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setWordInputQuery(e.target.value);

  const handlePreviousWordSearch = (prevWord: string) =>
    setWordInputQuery((word) => prevWord);

  const handleOnWordSearch = (e: any) => {
    e.preventDefault();

    trigger(wordInputQuery, true);
    setNewPreviousWord(wordInputQuery);
    setPreviousWords(getPreviousWords());
  };

  useEffect(() => {
    setPreviousWords(getPreviousWords());
  }, []);

  return (
    <section className={classes.dictionaryInner}>
      <SideBar>
        <div className={classes.sideBarInnerWrapper}>
          <form
            action=""
            onSubmit={handleOnWordSearch}
            className={classes.searchForm}
          >
            <SearchBar
              placeholder="Find a word"
              value={wordInputQuery}
              onChange={handleOnInputChange}
            />
            <CustomButton text="Look up!" onClick={handleOnWordSearch} />
          </form>
          <h2>Previous words:</h2>
          <PreviousWordsList
            previousWords={previousWords}
            onPrevWordSearch={handlePreviousWordSearch}
          />
        </div>
      </SideBar>
      {data && !isFetching && !error ? (
        <WordInfo wordInfo={data} />
      ) : (
        <ContentBox>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
            }}
          >
            {isFetching ? (
              <LoadingSpinner />
            ) : (
              <h2 style={{ fontSize: '2rem' }}>
                {error
                  ? 'Oops, something went wrong!'
                  : 'Looking for something special?'}
              </h2>
            )}
          </div>
        </ContentBox>
      )}
    </section>
  );
};

export default DictionaryInner;
