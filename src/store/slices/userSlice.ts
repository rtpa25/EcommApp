/** @format */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  currentUser: Object | null;
  isFetching: boolean;
  error: boolean;
  token: string | undefined;
}

const initialState: UserState = {
  currentUser: null,
  isFetching: false,
  error: false,
  token: undefined,
};

const UserSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSucess: (state, action: PayloadAction<any>) => {
      state.isFetching = false;
      state.currentUser = action.payload.user;
      state.token = action.payload.token;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { loginStart, loginSucess, loginFailure } = UserSlice.actions;
export default UserSlice.reducer;
