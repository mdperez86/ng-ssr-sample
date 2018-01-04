import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { isPlatformServer } from '@angular/common';

const I18N = makeStateKey<any>('i18n');

@Injectable()
export class I18nService {
  private isServer: boolean;
  private i18nUrl = 'http://localhost:8882/api/i18n';

  constructor(
    private http: HttpClient,
    private ts: TransferState,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isServer = isPlatformServer(platformId);
    this.load();
  }

  protected load() {
    if (this.isServer) {
      this.http.get(this.i18nUrl).subscribe(response => {
        this.ts.set(I18N, response);
      });
    }
  }

  get(key: string): string {
    const i18n = this.ts.get(I18N, null);
    return i18n && i18n.hasOwnProperty(key) ? i18n[key] : key;
  }
}
