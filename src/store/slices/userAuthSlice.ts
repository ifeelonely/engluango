import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface UserAuthState {
  email: string;
  password: string;
}

const initialState: UserAuthState = {
  email: '',
  password: '',
};

export const UserAuthSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});

export const { setEmail, setPassword } = UserAuthSlice.actions;
export default UserAuthSlice.reducer;
