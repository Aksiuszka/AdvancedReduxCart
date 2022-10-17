import { configureStore } from '@reduxjs/toolkit';
import { uiReducer } from './slices/UI';
import { cardReducer } from './slices/card';

 export const store = configureStore({
  reducer: {
    ui: uiReducer,
    card: cardReducer,
  }})
