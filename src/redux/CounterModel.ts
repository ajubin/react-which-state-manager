import { createSlice } from '@reduxjs/toolkit';
import { reduxStore } from './setup';

// Circular dependency on reduxStore to get type of global state
export const selectCounter = (state: ReturnType<typeof reduxStore.getState>) => state.counter;

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 0,
  },
  reducers: {
    increment: (state) => {
      // use immer js to mutate state directly
      // however, reducer should not returm
      state.counter++;
    },
    decrement: (state) => {
      state.counter--;
    },
  },
});
