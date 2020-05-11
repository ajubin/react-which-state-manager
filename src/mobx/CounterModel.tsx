import { observable } from 'mobx';
// ----------------- COUNTER MODEL ---------------------
export class CounterStore {
  @observable counter = 0;
  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }
}
