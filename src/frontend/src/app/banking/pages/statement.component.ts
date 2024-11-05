import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BankingStore } from '../services/banking.store';

@Component({
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
    template: `
        <p>statement your balance is XXXX</p>
    `,
    styles: ``
})
export class StatementComponent {

    private bankingService = inject(BankingStore);
}