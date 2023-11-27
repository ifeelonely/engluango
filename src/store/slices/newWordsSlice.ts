import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface NewWordsState {
  numberOfNewWords: number;
  cardsStates: NewCardsStates[];
  isSetCreated: boolean;
}

interface NewCardsStates {
  newWordTerm: string;
  definition: string;
}

const initialState: NewWordsState = {
  numberOfNewWords: 2,
  cardsStates: [],
  isSetCreated: false,
};

export const NewWordsSlice = createSlice({
  name: 'newWords',
  initialState,
  reducers: {
    setnumberOfNewWords: (state, action: PayloadAction<number>) => {
      state.numberOfNewWords = action.payload;
    },
    addNewCard: (state, action: PayloadAction<NewCardsStates>) => {
      state.cardsStates = [...state.cardsStates, action.payload];
    },
    setIsSetCreated: (state) => {
      state.isSetCreated = !state.isSetCreated;
    },
  },
});

export const { setnumberOfNewWords, addNewCard, setIsSetCreated } = NewWordsSlice.actions;
export default NewWordsSlice.reducer;
