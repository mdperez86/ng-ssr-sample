import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsyncComponent } from './async.component';

const routes: Routes = [
  {
    path: '',
    component: AsyncComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsyncRoutingModule { }
