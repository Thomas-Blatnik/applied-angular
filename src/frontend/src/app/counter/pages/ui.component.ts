import {
  Component,
  ChangeDetectionStrategy,
  signal,
  inject,
} from '@angular/core';
import { CounterStore } from '../services/counter.store';
import { DecrementButtonDirective, IncrementButtonDirective } from '@shared';


@Component({
  selector: 'app-ui',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IncrementButtonDirective, DecrementButtonDirective],
  template: `
    <div data-testid="counter-feature-ui">
      <button
        [disabled]="store.decrementDisabled()"
        (click)="store.decrement()"
        appDecrementButton
      >
        -
      </button>
      <span data-testid="current">{{ store.current() }}</span>
      <button (click)="store.increment()" appIncrementButton>+</button>
    </div>

    <div data-testid="fizzBuzz">{{ store.fizzBuzz() }}</div>
  `,
  styles: ``,
})
export class UiComponent {
  current = signal(0);
  store = inject(CounterStore);
}
