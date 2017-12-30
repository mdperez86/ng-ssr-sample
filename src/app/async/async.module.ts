import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsyncRoutingModule } from './async-routing.module';

import { AsyncComponent } from './async.component';
import { ApiService } from './services/api.service';

@NgModule({
  imports: [
    CommonModule,
    AsyncRoutingModule
  ],
  declarations: [AsyncComponent],
  providers: [ApiService]
})
export class AsyncModule { }
