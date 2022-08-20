import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import {
  registerUser,
  logInUser,
  logOutUser,
  fetchCurrentUser,
} from './authOptions';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser:false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registerUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logInUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOutUser.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [fetchCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
    },
  },
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
