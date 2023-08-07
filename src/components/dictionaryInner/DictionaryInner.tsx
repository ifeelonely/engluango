'use client';
import React, { SyntheticEvent, useState } from 'react';
import SideBar from '../sideBar/SideBar';
import SearchBar from '../UI/searchBar/SearchBar';
import classes from './DictionaryInner.module.css';
import { dictionaryAPI } from '@/services/DictionaryService';
import { CustomButton } from '../UI/button/CustomButton';
import ContentBox from '../contentBox/ContentBox';
import WordInfo from '../wordInfo/WordInfo';

const DictionaryInner = (): JSX.Element => {
  const [wordInputQuery, setWordInputQuery] = useState<string>('');
  const [trigger, { data }] = dictionaryAPI.useLazyFetchWordQuery();

  const handleOnInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setWordInputQuery(e.target.value);

    console.log(data);
  const handleOnWordSearch = (e: SyntheticEvent) => {
    e.preventDefault();
    trigger(wordInputQuery, true);
  };

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
        </div>
      </SideBar>
      {data ? (
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
            <h2 style={{ fontSize: '2rem' }}>Looking for something special?</h2>
          </div>
        </ContentBox>
      )}
    </section>
  );
};

export default DictionaryInner;
