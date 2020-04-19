import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SchoolListComponent } from './school/school-list.component';
import { SchoolCreateComponent } from './school/school-create-component';
import { ClassListComponent } from './class/class-list.component';
import { ClassCreateComponent } from './class/class-create-component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-center',
    }),
    RouterModule.forRoot([
      { path: 'schools', component: SchoolListComponent },
      { path: 'schools/new', component: SchoolCreateComponent },
      { path: 'classes', component: ClassListComponent },
      { path: 'classes/new', component: ClassCreateComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    SchoolListComponent,
    SchoolCreateComponent,
    ClassListComponent,
    ClassCreateComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/