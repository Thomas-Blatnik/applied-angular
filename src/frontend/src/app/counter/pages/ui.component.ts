import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CounterStore } from '../services/counter.store';

@Component({
  selector: 'app-ui',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div data-testid="counter-feature-ui">
      <button [disabled]="store.decrementDisabled()"
      (click)="store.decrement()" class="btn btn-primary">-</button>
      <span data-testid="current">{{ store.count() }}</span>
      <button (click)="store.increment()" class="btn btn-primary">+</button>
    </div>
    <div data-testid="fizzBuzz">{{ store.fizzBuzz() }}</div>
  `,
  styles: ``,
})
export class UiComponent {
    store = inject(CounterStore);
}
