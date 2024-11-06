import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';

@Component({
  selector: 'app-ui',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div data-testid="counter-feature-ui">
      <button [disabled]="decrementDisabled()"
      (click)="decrement()" class="btn btn-primary">-</button>
      <span data-testid="current">{{ count() }}</span>
      <button (click)="increment()" class="btn btn-primary">+</button>
    </div>
  `,
  styles: ``,
})
export class UiComponent {
    count = signal(0);
    decrementDisabled = computed(() => this.count() <= 0)

    increment(){
        this.count.update((c) => c + 1)
    }

    decrement(){
        this.count.update((c) => c - 1)
    }
}
