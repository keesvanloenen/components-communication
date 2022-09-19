// 4a. Child → Parent @ViewChild()

import { Component } from '@angular/core';

@Component({
  selector: 'child4a',
  template: `
    <article>
      <p>{{ childMessage }}</p>
    </article>`,
  styles: ['']
})
export class Child4aComponent {
  childMessage = 'Hello from child';

  doSomething() {
    console.log('Child: done something...')
  }
}
