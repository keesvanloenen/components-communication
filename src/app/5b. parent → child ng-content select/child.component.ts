// 5b. parent → child ng-content select

import { AfterContentInit, Component, ContentChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'child5b',
  template: `
    <article>
      <p>projected values:</p>
      <ng-content select=".city"></ng-content>
      <ng-content select=".name"></ng-content>
    </article>
  `,
  styles: ['']
})
export class Child5bComponent { }