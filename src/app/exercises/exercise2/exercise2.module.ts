import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Exercise2Component } from './exercise2.component';
import { ParentComponent } from './parent/parent.component';
import { RouterModule } from '@angular/router';
import { ChildComponent } from './parent/child/child.component';
import { FormsModule } from '@angular/forms';
import { InvertedParentComponent } from './inverted-parent/inverted-parent.component';



@NgModule({
  declarations: [
    ParentComponent,
    Exercise2Component,
    ChildComponent,
    InvertedParentComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{
      path: '',
      component: Exercise2Component
    }])
  ]
  
})
export class Exercise2Module { }
