// 1b. parent → child @Input() + OnChanges()

import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'child1b',
  template: `
    <article>
      <p>{{ childMessage }}</p>
    </article>
  `,
  styles: ['']
})
export class Child1bComponent implements OnChanges {
  @Input() childMessage!: string;

  ngOnChanges(changes: SimpleChanges) {
    console.log('👉 [OnChanges]', changes);

    if (changes['childMessage'].firstChange) {
      console.log("First time, I'm going to do something extra");
    }
  }
}
