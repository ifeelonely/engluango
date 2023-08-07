import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface UserAuthState {
  login: string;
  email: string;
  password: string;
}

const initialState: UserAuthState = {
  login: '',
  email: '',
  password: '',
};

export const UserAuthSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<string>) => {
      state.login = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});

export const {setLogin, setEmail, setPassword} = UserAuthSlice.actions;
export default UserAuthSlice.reducer;
