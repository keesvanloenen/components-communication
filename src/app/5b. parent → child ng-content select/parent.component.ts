// 5b. parent → child ng-content select

import { Component } from '@angular/core';

@Component({
  selector: 'parent5b',
  template: `
    <section>
      <child5b>
        <h3 class="city">Urk</h3>
        <!-- <h3 class="city" #the_city>Urk</h3> -->
        <p class="name">Joop</p>
      </child5b>
    </section>
  `,
  styles: [`
    p {
      display: inline-block;
      color: black;
      width: 100px;
      border: 2px dashed black;
    }
  `]
})
export class Parent5bComponent { }
