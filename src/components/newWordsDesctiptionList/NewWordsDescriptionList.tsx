import React from 'react';
import { useAppSelector } from '@/store/Hooks';
import NewWordDescription from '../newWordDescription/NewWordDescription';
import classes from './NewWordsDescriptionList.module.css';

const NewWordsDescriptionList = (): JSX.Element => {
  const { numberOfNewWords } = useAppSelector((state) => state.NewWordsSlice);
  const numOfWordsArr = new Array(numberOfNewWords).fill(numberOfNewWords);
   
  return (
    <div className={classes.newWordsDescriptionList}>
      {numOfWordsArr.map((term, indx) => (
        <NewWordDescription key={term + indx} wordNumber={indx + 1} />
      ))}
    </div>
  );
};

export default NewWordsDescriptionList;
