// 3. child → parent #TRV

import { Component } from '@angular/core';

@Component({
  selector: 'parent3',
  template: `
    <section>
      <child3 #the_child></child3>

      <p>{{ the_child.childMessage }}</p>
      <button (click)="the_child.doSomething()">Click me</button>
    </section>
  `,
  styles: ['']
})
export class Parent3Component {}
