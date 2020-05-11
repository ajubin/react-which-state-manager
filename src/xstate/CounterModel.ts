import { Machine, assign } from 'xstate';

export const counterContext = {
  count: 0,
};
export const increment = (context: typeof counterContext) => context.count + 1;
export const decrement = (context: typeof counterContext) => context.count - 1;
export const counterMachine = Machine({
  initial: 'active',
  context: counterContext,
  states: {
    active: {
      on: {
        INC: {
          actions: assign({
            count: increment,
          }),
        },
        DEC: {
          actions: assign({
            count: decrement,
          }),
        },
      },
    },
  },
});
