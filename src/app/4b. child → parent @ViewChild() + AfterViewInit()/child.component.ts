// 4b. child → parent @ViewChild() + AfterViewInit()

import { Component } from '@angular/core';

@Component({
  selector: 'child4b',
  template: `
    <article>
      <p>{{ childMessage }}</p>
    </article>`,
  styles: ['']
})
export class Child4bComponent {
  childMessage = 'Hello from child';

  doSomething() {
    console.log('Child: done something...')
  }
}
