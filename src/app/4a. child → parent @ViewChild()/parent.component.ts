// 4a. Child → Parent @ViewChild()

import { Component, ViewChild } from '@angular/core';
import { Child4aComponent } from './child.component';

@Component({
  selector: 'parent4a',
  template: `
    <section>
      <child4a></child4a>
      <button (click)="onClick()">Click me</button>
    </section>
  `,
  styles: ['']
})
export class Parent4aComponent {
  @ViewChild(Child4aComponent) child!: Child4aComponent;

  onClick() {
    this.child.doSomething();
  }
}
