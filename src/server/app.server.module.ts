import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { AppModule } from '../client/app.module';
import { AppComponent } from '../client/app.component';
import { appBaseHrefProvider } from './services/app-base-href.provider';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,
    ModuleMapLoaderModule
  ],
  providers: [
    appBaseHrefProvider
  ],
  bootstrap: [AppComponent]
})
export class AppServerModule { }
