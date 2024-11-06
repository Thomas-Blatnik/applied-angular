import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-counter',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterModule],
    template: `
      <div data-testid="counter-feature">
        Counter Stuff Goes Here
        <div>
            <a routerLink="ui" class="btn btn-primary">UI</a>
        </div>
        <router-outlet />
      </div>  
    `,
    styles: ``
})
export class CounterComponent {

}