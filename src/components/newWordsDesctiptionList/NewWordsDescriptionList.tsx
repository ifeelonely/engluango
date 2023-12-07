import React from 'react';
import { useAppSelector } from '@/store/Hooks';
import NewWordDescription from '../newWordDescription/NewWordDescription';
import classes from './NewWordsDescriptionList.module.css';

const NewWordsDescriptionList = (): JSX.Element => {
  const { cardsStates } = useAppSelector((state) => state.NewSetSlice);

  return (
    <div className={classes.newWordsDescriptionList}>
      {cardsStates.map((card, indx) => (
        <NewWordDescription
          key={card.newWordTerm + indx}
          wordNumber={indx + 1}
        />
      ))}
    </div>
  );
};

export default NewWordsDescriptionList;
