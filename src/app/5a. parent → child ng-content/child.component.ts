// 5a. parent → child ng-content

import { Component } from '@angular/core';

@Component({
  selector: 'child5a',
  template: `
    <article>
      <p>projected value:</p>
      <ng-content></ng-content>
    </article>
  `,
  styles: ['']
})
export class Child5aComponent { }
