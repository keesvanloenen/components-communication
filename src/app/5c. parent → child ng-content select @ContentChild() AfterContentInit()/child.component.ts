// 5c. parent → child ng-content select @ContentChild() AfterContentInit() 

import { AfterContentInit, Component, ContentChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'child5c',
  template: `
    <article>
      <p>projected values:</p>
      <ng-content select=".city"></ng-content>
      <ng-content select=".name"></ng-content>
    </article>
  `,
  styles: ['']
})
export class Child5cComponent implements AfterContentInit {
  @ContentChild('the_city') child_city!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterContentInit() {
    console.log('👉 [AfterContentInit]');
    this.renderer.setStyle(this.child_city.nativeElement, 'background', 'hsl(336, 78%, 43%)');
  }
}