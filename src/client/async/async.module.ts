import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsyncRoutingModule } from './async-routing.module';
import { PipeModule } from '../pipes/pipe.module';
import { AsyncComponent } from './async.component';
import { ApiService } from './services/api.service';

@NgModule({
  imports: [
    CommonModule,
    AsyncRoutingModule,
    PipeModule
  ],
  declarations: [AsyncComponent],
  providers: [ApiService]
})
export class AsyncModule { }
