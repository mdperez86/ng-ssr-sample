import { Injectable, PLATFORM_ID, Inject, Optional } from '@angular/core';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { HttpClient, HttpParams } from '@angular/common/http';
import { isPlatformServer } from '@angular/common';

const I18N = makeStateKey<any>('i18n');

@Injectable()
export class I18nService {
  private isServer: boolean;
  private i18nUrl = 'http://localhost:8882/api/i18n';

  constructor(
    private http: HttpClient,
    private ts: TransferState,
    @Inject(PLATFORM_ID) platformId: Object,
    @Optional() @Inject('lang') private lang: string
  ) {
    this.isServer = isPlatformServer(platformId);
    this.load();
  }

  protected load() {
    if (this.isServer) {
      this.http.get(this.i18nUrl, {
        params: new HttpParams().set('lang', this.lang)
      }).subscribe(response => {
        this.ts.set(I18N, response);
      });
    }
  }

  get(key: string, args?: string[]): string {
    const i18n = this.ts.get(I18N, null);
    return i18n && i18n.hasOwnProperty(key) ?
      this.parseValue(i18n[key], args || []) : key;
  }

  private parseValue(value: string, args: string[]) {
    args.forEach((v, i) => {
      value = value.replace(`{${i}}`, v);
    });
    return value;
  }
}
