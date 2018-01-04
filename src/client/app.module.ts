import { BrowserModule, BrowserTransferStateModule, TransferState } from '@angular/platform-browser';
import { NgModule, PLATFORM_ID, APP_ID, Inject, Optional } from '@angular/core';
import { isPlatformServer, APP_BASE_HREF, DOCUMENT } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { StaticModule } from './static/static.module';
import { I18nService } from './services/i18n.service';
import { I18nPipe } from './pipes/i18n.pipe';
import { AppComponent } from './app.component';
import { LANG, BASE_HREF } from '../shared/transfer-state.keys';

@NgModule({
  declarations: [
    AppComponent,
    I18nPipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-ssr-sample' }),
    BrowserTransferStateModule,
    HttpClientModule,
    AppRoutingModule,
    StaticModule
  ],
  providers: [
    I18nService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    @Inject(APP_ID) private appId: string
  ) {
    const platform = isPlatformServer(platformId) ? 'on the server' : 'in the browser';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
