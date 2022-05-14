import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>
      Te base is: <strong>{{ base }}</strong>
    </h3>
    <button (click)="accumulate('add')">+{{ base }}</button>
    <span>{{ counter }}</span>
    <button (click)="accumulate('subtract')">-{{ base }}</button>
  `,
})
export class CounterComponent {
  public counter = 0;

  public base = 5;

  public accumulate(action: 'add' | 'subtract') {
    if (action === 'add') {
      this.counter += this.base;
    } else {
      this.counter -= this.base;
    }
  }
}
