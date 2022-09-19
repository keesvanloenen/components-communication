// 4c. child → parent @ViewChildren() + AfterViewInit()

import { AfterViewInit, Component, QueryList, ViewChildren } from '@angular/core';
import { Child4cComponent } from './child.component';

@Component({
  selector: 'parent4c',
  template: `
    <section>
      <child4c></child4c>
      <child4c></child4c>
    </section>
  `,
  styles: ['']
})
export class Parent4cComponent implements AfterViewInit {
  @ViewChildren(Child4cComponent) children!: QueryList<Child4cComponent>;

  ngAfterViewInit() {
    console.log('1. as querylist:', this.children);
    
    // or if you want an ordinary array:

    let children: Child4cComponent[] = this.children.toArray();
    console.log('2. as array:', children);
  }
}
