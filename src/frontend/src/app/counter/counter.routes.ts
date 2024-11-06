import { Routes } from "@angular/router";
import { CounterComponent } from "./counter.component";
import { UiComponent } from "./pages/ui.component";

export const COUNTER_ROUTES: Routes = [
    {
      path: '',
      component: CounterComponent,
      providers: [],
      children: [
        {
          path: 'ui',
          component: UiComponent,
        },
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