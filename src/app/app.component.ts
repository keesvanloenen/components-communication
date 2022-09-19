import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">
      <button mat-icon-button [matMenuTriggerFor]="menu" aria-label="icon-button with a menu of communication options">
        <mat-icon>menu</mat-icon>
      </button>
      
      <mat-menu #menu="matMenu">
        <button mat-menu-item routerLink="/scenario/0">
          <mat-icon>phone_disabled</mat-icon>
          <span>0. no communication</span>
        </button>
        <button mat-menu-item [matMenuTriggerFor]="parentToChildInput">
          <mat-icon>input</mat-icon>
          <span>1. Parent sends data to Child 👈</span>
        </button>
        <button mat-menu-item routerLink="/scenario/3">
          <mat-icon>output</mat-icon>
          <span>2. Child sends data to Parent 👈</span>
        </button>
        <button mat-menu-item routerLink="/scenario/4">
          <mat-icon>link</mat-icon>
          <span>3. Parent references Child, template only</span>
        </button>
        <button mat-menu-item [matMenuTriggerFor]="parentReferencesChild">
          <mat-icon>visibility</mat-icon>
          <span>4. Parent references Child 👈</span>
        </button>
        <button mat-menu-item [matMenuTriggerFor]="parentProjectsDataIntoChild">
          <mat-icon>videocam</mat-icon>
          <span>5. Parent projects data into Child</span>
        </button>
      </mat-menu>

      <mat-menu #parentToChildInput="matMenu">
        <button mat-menu-item routerLink="/scenario/1">
          <span>a. not using lifecycle hook 👈</span>
        </button>
        <button mat-menu-item routerLink="/scenario/2">
          <span>b. using lifecycle hook 👈</span>
        </button>
      </mat-menu>

      <mat-menu #parentReferencesChild="matMenu">
        <button mat-menu-item routerLink="/scenario/5">
          <span>a. not using lifecycle hook 👈</span>
        </button>
        <button mat-menu-item routerLink="/scenario/6">
          <span>b. using lifecycle hook 👈</span>
        </button>
        <button mat-menu-item routerLink="/scenario/7">
          <span>c. more children</span>
        </button>
      </mat-menu>
      
      <mat-menu #parentProjectsDataIntoChild="matMenu">
        <button mat-menu-item routerLink="/scenario/8">
          <span>a. using one slot, no lifecycle hook</span>
        </button>
        <button mat-menu-item routerLink="/scenario/9">
          <span>b. using more slots, no lifecycle hook</span>
        </button>
        <button mat-menu-item routerLink="/scenario/10">
          <span>c. using more slots and lifecycle hook</span>
        </button>
      </mat-menu>

      <span>Demo Parent Child communication</span>
    </mat-toolbar>
  
    <div style="margin-top: 1em;">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    ::ng-deep.mat-menu-panel {
      max-width: none !important;
    }`]
})
export class AppComponent { }