import { configureStore, getDefaultMiddleware, Middleware } from '@reduxjs/toolkit';
import { counterSlice } from './CounterModel';

// ----------------- GLOBAL ---------------------

const logger: Middleware = (store) => (next) => (action) => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
};

// Out of the box debugging with RTK
export const reduxStore = configureStore({
  reducer: counterSlice.reducer,
  middleware: [...getDefaultMiddleware(), logger],
});
