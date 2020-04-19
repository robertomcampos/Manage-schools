import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SchoolListComponent } from './school/school-list.component';
import { SchoolCreateComponent } from './school/school-create-component';
import { ClassListComponent } from './class/class-list.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'schools', component: SchoolListComponent },
      { path: 'schools/new', component: SchoolCreateComponent },
      { path: 'classes', component: ClassListComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    SchoolListComponent,
    SchoolCreateComponent,
    ClassListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/