import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

export interface Scenario {
  id: number;
  scenario: string;
  title: string;
  description: string;
};

@Component({
  selector: 'app-host',
  template: `
    <div style="display: flex;">
      <div style="width: 2.5em;">
        <h4>{{ activeScenario.scenario}}.</h4>
      </div>
      <div>
        <h4>{{ activeScenario.title }}</h4>
        {{ activeScenario.description }}
      </div>
    </div>
  
    <div [ngSwitch]="activeScenario.id">
      <parent0 *ngSwitchCase="0"></parent0>
      <parent1a *ngSwitchCase="1">Hallo</parent1a>
      <parent1b *ngSwitchCase="2"></parent1b>
      <parent2 *ngSwitchCase="3"></parent2>
      <parent3 *ngSwitchCase="4"></parent3>
      <parent4a *ngSwitchCase="5"></parent4a>
      <parent4b *ngSwitchCase="6"></parent4b>
      <parent4c *ngSwitchCase="7"></parent4c>
      <parent5a *ngSwitchCase="8"></parent5a>
      <parent5b *ngSwitchCase="9"></parent5b>
      <parent5c *ngSwitchCase="10"></parent5c>
    </div>
  `,
  styles: ['']
})
export class HostComponent implements OnInit { 
  activeScenario!: Scenario;

  scenarios: Scenario[] = [
    { id: 0, scenario: '0', title: '🧔 👦 no communication', description: '', },
    { id: 1, scenario: '1a', title: '🧔 ⟶ 👦 pass data to Child', description: 'in Child use @Input()', },
    { id: 2, scenario: '1b', title: '🧔 ⟶ 👦 pass data to Child', description: 'in Child use @Input() + ngOnChanges()', },
    { id: 3, scenario: '2', title: '🧔 ⟵ 👦 pass data to Parent', description: 'in Child use @Output() + EventEmitter', },
    { id: 4, scenario: '3', title: '🧔 ⚟ 👦 get access to Child in template', description: 'define TRV like #example (very limited, all wiring is done within parent template)', },
    { id: 5, scenario: '4a', title: '🧔 ⚟ 👦 get reference to Child', description: 'in Parent use @ViewChild()', },
    { id: 6, scenario: '4b', title: '🧔 ⚟ 👦 get reference to Child', description: 'in Parent use @ViewChild() + AfterViewInit()', },
    { id: 7, scenario: '4c', title: '🧔 ⚟ 👦👦 get reference to more Childs', description: 'in Parent use @ViewChildren() + AfterViewInit()', },
    { id: 8, scenario: '5a', title: '🧔 ⟶ 👦 project content into Child', description: 'in Child use <ng-content>', },
    { id: 9, scenario: '5b', title: '🧔 ⟶ 👦 project content into Child', description: 'in Child use <ng-content select="...">', },
    { id: 10, scenario: '5c', title: '🧔 ⟶ 👦 project content into Child', description: 'in Child use <ng-content select="..."> + @ContentChild + AfterContentInit()', },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = Number(params['id']);
      this.activeScenario = this.scenarios.find((s) => s.id === id) || this.scenarios[0];
    });
  }
}