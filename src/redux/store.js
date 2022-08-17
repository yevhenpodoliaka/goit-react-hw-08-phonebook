import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';



export const store = configureStore({
    reducer: {
    auth: null,
    contacts: null,
  },
});

setupListeners(store.dispatch);
