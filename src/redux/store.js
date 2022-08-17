import { configureStore } from '@reduxjs/toolkit';





export const store = configureStore({
  reducer: {
    auth: null,
    contacts: null,
  },
});

