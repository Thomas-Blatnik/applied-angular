import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
 
interface BankState {
  balance: number;
}
 
const initialState: BankState = {
  balance: 0,
};
export const BankingStore = signalStore(withState<BankState>(initialState),
withMethods((store) => {
    return {
        deposit: (amount:number) => 
            patchState(store, { balance: store.balance() + amount}),
    };
}));
