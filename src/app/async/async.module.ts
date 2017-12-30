import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsyncRoutingModule } from './async-routing.module';

import { AsyncComponent } from './async.component';

@NgModule({
  imports: [
    CommonModule,
    AsyncRoutingModule
  ],
  declarations: [AsyncComponent]
})
export class AsyncModule { }
