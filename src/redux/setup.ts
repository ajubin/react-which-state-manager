import { configureStore, createSlice } from '@reduxjs/toolkit';

// ----------------- COUNTER ---------------------

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
  },
});

// ----------------- GLOBAL ---------------------
// Out of the box debugging with RTK
export const reduxStore = configureStore({ reducer: counterSlice.reducer });
