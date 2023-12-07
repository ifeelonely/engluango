import { combineReducers, configureStore } from '@reduxjs/toolkit';
import UserAuthSlice from './slices/userAuthSlice';
import NewSetSlice from './slices/newSetSlice';
import { dictionaryAPI } from '@/services/DictionaryService';

const rooteReducer = combineReducers({
  UserAuthSlice,
  NewSetSlice,
  [dictionaryAPI.reducerPath]: dictionaryAPI.reducer,
});

export const store = configureStore({
  reducer: rooteReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dictionaryAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
