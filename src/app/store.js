import { configureStore } from '@reduxjs/toolkit';
import advisorReducer from './advisorSlice';

export const store = configureStore({
  reducer: {
    advisor: advisorReducer,
  },
});
