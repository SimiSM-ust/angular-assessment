import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Exercise1Module} from "./exercise1/exercise1.module";
import {RouterModule} from "@angular/router";
import {Exercise1Component} from "./exercise1/exercise1.component";
import {Exercise2Component} from "./exercise2/exercise2.component";
import {Exercise3Component} from "./exercise3/exercise3.component";
import {Exercise4Component} from "./exercise4/exercise4.component";
import {ExerciseNotFoundComponent} from "./exerciseNotFound/exerciseNotFound.component";
import {Exercise4Module} from "./exercise4/exercise4.module";
import { ParentComponent } from './exercise2/parent/parent.component';
import { Exercise2Module } from './exercise2/exercise2.module';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    // Exercise1Module,
    // Exercise4Module,
    // Exercise2Module,
    RouterModule.forChild([{
      path: '1',
      loadChildren: () =>
      import('./exercise1/exercise1.module').then((m) => m.Exercise1Module)
      // component: Exercise1Component,
    },{
      path: '2',
      loadChildren: () =>
      import('./exercise2/exercise2.module').then((m) => m.Exercise2Module)
      // component: Exercise2Component,
    },{
      path: '3',
      loadChildren: () =>
      import('./exercise3/exercise3.module').then((m) => m.Exercise3Module)
      // component: Exercise3Component,
    },{
      path: '4',
      loadChildren: () =>
      import('./exercise4/exercise4.module').then((m) => m.Exercise4Module)
      // component: Exercise4Component,
    }, {
      path: '**',
      loadChildren: () =>
      import('./exerciseNotFound/exerciseNotFound.module').then((m) => m.ExerciseNotFoundModule)
      // component: ExerciseNotFoundComponent
    }])
  ]
})
export class ExercisesModule { }
