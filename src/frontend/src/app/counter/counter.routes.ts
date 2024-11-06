import { Routes } from "@angular/router";
import { CounterComponent } from "./counter.component";

export const COUNTER_ROUTES: Routes = [
    {
      path: '',
      component: CounterComponent,
      providers: [],
      children: [
        // {
        //   path: 'dashboard',
        //   component: DefaultComponent,
        // },
        // {
        //   path: 'deposit',
        //   component: DepositComponent,
        // },
        // {
        //   path: 'withdraw',
        //   component: WithdrawComponent,
        //   canActivate: [withdrawGuard()],
        // },
        // {
        //   path: 'statement',
        //   component: StatementComponent,
        // },
        // {
        //   path: '**',
        //   redirectTo: 'dashboard',
        // },
      ],
    },
  ];