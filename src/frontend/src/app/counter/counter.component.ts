import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-counter',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
    template: `
      <div data-testid="counter-feature">
        Counter Stuff Goes Here
      </div>  
    `,
    styles: ``
})
export class CounterComponent {

}