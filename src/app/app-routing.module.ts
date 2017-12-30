import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaticComponent } from './static/static.component';

const routes: Routes = [
  {
    path: '',
    component: StaticComponent
  },
  {
    path: 'async',
    loadChildren: 'app/async/async.module#AsyncModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
