// 5a. parent → child ng-content

import { Component } from '@angular/core';

@Component({
  selector: 'parent5a',
  template: `
    <section>
      <child5a><h3>Urk</h3></child5a>
    </section>
  `,
  styles: ['']
})
export class Parent5aComponent { }
