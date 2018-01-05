import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticComponent } from './static.component';
import { PipeModule } from '../pipes/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    PipeModule
  ],
  declarations: [
    StaticComponent
  ],
  exports: [StaticComponent]
})
export class StaticModule { }
