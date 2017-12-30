import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { isPlatformServer } from '@angular/common';

const SERVER_DATE = makeStateKey<Date>('serverDate');

export class ApiService {
  private isServer: boolean;

  constructor(
    private ts: TransferState,
    @Inject(PLATFORM_ID) platformId
  ) {
    this.isServer = isPlatformServer(platformId);
  }

  getDate(): Date {
    if (this.isServer) {
      this.ts.set(SERVER_DATE, new Date());
    } else if (this.ts.hasKey(SERVER_DATE)) {
      return this.ts.get<Date>(SERVER_DATE, null);
    }
    return null;
  }
}
