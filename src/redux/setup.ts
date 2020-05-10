import { createStore } from 'redux';
interface ReduxAction {
  type: string;
  payload?: any;
}

// ----------------- COUNTER ---------------------
const initialState = {
  counter: 0,
};

const INCREMENT = 'INCREMENT';

export const actionCreatorIncrement = () => ({
  type: INCREMENT,
});

export const selectCounter = (state: typeof initialState) => state.counter;

const counterReducer = (state = initialState, action: ReduxAction) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1,
      };

    default:
      return state;
  }
};

// ----------------- GLOBAL ---------------------
export const reduxStore = createStore(counterReducer);
