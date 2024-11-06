
import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';

type CounterState = {
  count: number;
  countBy: number;
};

const initialState: CounterState = {
  count: 0,
  countBy: 1
};
export const CounterStore = signalStore(
  withState<CounterState>(initialState),
  withMethods((store) => {
    // const service = inject(BankingService);
    return {

      increment: () => {
        patchState(store, {count: store.count() + store.countBy()})
      },

      decrement: () => {
        patchState(store, {count: store.count() - store.countBy()})
      },

      changeCountBy: (amount: number) => {
        patchState(store, {countBy: amount})
      }

    };
  }),
  withComputed((store) => {
    return {
        decrementDisabled: computed(() => {
            return store.count() <= 0;
        }),
        fizzBuzz: computed(() => {
            let fb = "";
    
            if(store.count() === 0){
                return fb;
            }
    
            if(store.count() % 3 === 0){
                fb += "Fizz"
            }
    
            if(store.count() % 5 === 0){
                fb += "Buzz"
            }
    
            return fb;
        }),
    }
    })
);