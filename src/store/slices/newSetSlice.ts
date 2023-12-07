import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface NewWordsState {
  cardsStates: NewCardsStates[];
  isSetCreated: boolean;
  isSetValid: boolean;
}

interface NewCardsStates {
  newWordTerm: string;
  definition: string;
}

const initialState: NewWordsState = {
  cardsStates: [{ newWordTerm: '', definition: '' }],
  isSetCreated: false,
  isSetValid: false,
};

export const NewWordsSlice = createSlice({
  name: 'newWords',
  initialState,
  reducers: {
    addNewCard: (state, action: PayloadAction<NewCardsStates>) => {
      state.cardsStates = [...state.cardsStates, action.payload];
    },
    setIsSetCreated: (state, action: PayloadAction<boolean>) => {
      state.isSetCreated = action.payload;
    },
  },
});

export const { addNewCard, setIsSetCreated } = NewWordsSlice.actions;
export default NewWordsSlice.reducer;
