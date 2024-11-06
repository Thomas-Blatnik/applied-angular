import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CounterStore } from '../services/counter.store';

@Component({
  selector: 'app-prefs',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div>
      Counting by {{ store.countBy() }}
      <div>
        <button
          [disabled]="store.countBy() === 1"
          (click)="store.changeCountBy(1)"
          class="btn btn-primary"
        >
          1
        </button>
        <button 
        [disabled]="store.countBy() === 3"
        (click)="store.changeCountBy(3)" class="btn btn-primary">
          3
        </button>
        <button 
        [disabled]="store.countBy() === 5"
        (click)="store.changeCountBy(5)" class="btn btn-primary">
          5
        </button>
      </div>
    </div>
  `,
  styles: ``,
})
export class PrefsComponent {
  store = inject(CounterStore);
}
