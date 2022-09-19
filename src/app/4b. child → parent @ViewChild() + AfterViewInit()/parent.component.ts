// 4b. child → parent @ViewChild() + AfterViewInit()

import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Child4bComponent } from './child.component';

@Component({
  selector: 'parent4b',
  template: `
    <section>
      <child4b></child4b>
      <button (click)="onClick()">Click me</button>
    </section>
  `,
  styles: ['']
})
export class Parent4bComponent implements AfterViewInit {
  @ViewChild(Child4bComponent) child!: Child4bComponent;

  ngAfterViewInit() {
    console.log('👉 [AfterViewInit]', this.child.childMessage)
  }

  onClick() {
    this.child.doSomething();
  }
}
