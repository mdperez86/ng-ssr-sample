import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { isPlatformServer } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

const SERVER_DATE = makeStateKey<Date>('serverDate');

export class ApiService {
  private isServer: boolean;
  private serverDateUrl = '/api/server-date';

  constructor(
    private http: HttpClient,
    private ts: TransferState,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isServer = isPlatformServer(platformId);
  }

  getDate(): Observable<Date> {
    if (this.ts.hasKey(SERVER_DATE)) {
      const serverDate = this.ts.get<Date>(SERVER_DATE, null);
      return Observable.of(new Date(serverDate));
    } else if (this.isServer) {
      const now = new Date();
      this.ts.set(SERVER_DATE, now);
      return Observable.of(now);
    } else {
      return this.http.get<Date>(this.serverDateUrl).map(date => new Date(date));
    }
  }
}
