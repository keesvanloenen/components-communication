import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { HostComponent } from './host.component';
import { Parent0Component } from './0. no communication/parent.component';
import { Child0Component } from './0. no communication/child.component';
import { Parent1aComponent } from './1a. parent to child/parent.component';
import { Child1aComponent } from './1a. parent to child/child.component';
import { Parent1bComponent } from './1b. parent → child @Input() + OnChanges()/parent.component';
import { Child1bComponent } from './1b. parent → child @Input() + OnChanges()/child.component';
import { Parent2Component } from './2. child → parent @Output() + EventEmitter/parent.component';
import { Child2Component } from './2. child → parent @Output() + EventEmitter/child.component';
import { Parent3Component } from './3. child → parent #TRV/parent.component';
import { Child3Component } from './3. child → parent #TRV/child.component';
import { Parent4aComponent } from './4a. child → parent @ViewChild()/parent.component';
import { Child4aComponent } from './4a. child → parent @ViewChild()/child.component';
import { Parent4bComponent } from './4b. child → parent @ViewChild() + AfterViewInit()/parent.component';
import { Child4bComponent } from './4b. child → parent @ViewChild() + AfterViewInit()/child.component';
import { Parent4cComponent } from './4c. child → parent @ViewChildren() + AfterViewInit()/parent.component';
import { Child4cComponent } from './4c. child → parent @ViewChildren() + AfterViewInit()/child.component';
import { Parent5aComponent } from './5a. parent → child ng-content/parent.component';
import { Child5aComponent } from './5a. parent → child ng-content/child.component';
import { Parent5bComponent } from './5b. parent → child ng-content select/parent.component';
import { Child5bComponent } from './5b. parent → child ng-content select/child.component';
import { Parent5cComponent } from './5c. parent → child ng-content select @ContentChild() AfterContentInit()/parent.component';
import { Child5cComponent } from './5c. parent → child ng-content select @ContentChild() AfterContentInit()/child.component';

@NgModule({
  declarations: [
    AppComponent,
    HostComponent,
    Parent0Component, Child0Component,
    Parent1aComponent, Child1aComponent,
    Parent1bComponent, Child1bComponent,
    Parent2Component, Child2Component,
    Parent3Component, Child3Component,
    Parent4aComponent, Child4aComponent,
    Parent4bComponent, Child4bComponent,
    Parent4cComponent, Child4cComponent,
    Parent5aComponent, Child5aComponent,
    Parent5bComponent, Child5bComponent,
    Parent5cComponent, Child5cComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
