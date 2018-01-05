import { NgModule, PLATFORM_ID, APP_ID, Inject, Optional, LOCALE_ID } from '@angular/core';
import { isPlatformServer, APP_BASE_HREF, DOCUMENT } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, BrowserTransferStateModule, TransferState } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { PipeModule } from './pipes/pipe.module';
import { StaticModule } from './static/static.module';
import { I18nService } from './services/i18n.service';
import { I18nPipe } from './pipes/i18n.pipe';
import { AppComponent } from './app.component';
import { LANG, BASE_HREF } from '../shared/transfer-state.keys';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-ssr-sample' }),
    BrowserTransferStateModule,
    HttpClientModule,
    AppRoutingModule,
    StaticModule,
    PipeModule
  ],
  providers: [
    I18nService,
    {
      provide: LOCALE_ID,
      useFactory: (ts: TransferState) => ts.get(LANG, 'en-us'),
      deps: [TransferState]
    }
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
