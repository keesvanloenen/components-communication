// 1a. parent → child @Input()

import { Component } from '@angular/core';
 
@Component({
  selector: 'parent1a',
  template: `
    <section>
      <child1a [childMessage]="parentMessage"></child1a>
    </section>
  `,
  styles: ['']
})
export class Parent1aComponent {
  parentMessage = 'Hello from Parent';
}
