import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authReducer } from './auth/authSlice';
import { phonebookApi } from './phoneBook/phoneBookApi';
import { filterSlice } from './phoneBook/filterSlice';


export const store = configureStore({
  reducer: {
    auth: authReducer,
    [phonebookApi.reducerPath]: phonebookApi.reducer,
    [filterSlice.name]: filterSlice.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(phonebookApi.middleware),
});


export const persistor = persistStore(store);