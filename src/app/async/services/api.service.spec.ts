import { async, TestBed, inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TransferState } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { ApiService } from './api.service';

describe('ApiService', () => {
  const SERVER_DATE = new Date();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService, TransferState]
    });
  });

  it('should be created', async(() => {
    const service = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  }));

  it('should return the date from Transfer State', async(inject([HttpClient, TransferState],
    (http: HttpClient, ts: TransferState) => {
      const hasKey = spyOn(ts, 'hasKey').and.returnValue(true);
      const get = spyOn(ts, 'get').and.returnValue(SERVER_DATE);
      const service = new ApiService(http, ts, 'browser');
      return service.getDate().subscribe(date => {
        expect(hasKey.calls.count()).toBe(1);
        expect(get.calls.count()).toBe(1);
        expect(date).toBeTruthy();
        expect(date.getTime()).toBe(SERVER_DATE.getTime());
      });
    }))
  );

  it('should set the date to Transfer State and return it from Server', async(inject([HttpClient, TransferState],
    (http: HttpClient, ts: TransferState) => {
      const hasKey = spyOn(ts, 'hasKey').and.returnValue(false);
      const set = spyOn(ts, 'set');
      const service = new ApiService(http, ts, 'server');
      return service.getDate().subscribe(date => {
        expect(hasKey.calls.count()).toBe(1);
        expect(set.calls.count()).toBe(1);
        expect(date).toBeTruthy();
        expect(date).toEqual(jasmine.any(Date));
      });
    }))
  );

  it('should return the date from Server via http request', async(inject([HttpClient, TransferState],
    (http: HttpClient, ts: TransferState) => {
      const hasKey = spyOn(ts, 'hasKey').and.returnValue(false);
      const get = spyOn(http, 'get').and.returnValue(Observable.of(SERVER_DATE));
      const service = new ApiService(http, ts, 'browser');
      return service.getDate().subscribe(date => {
        expect(hasKey.calls.count()).toBe(1);
        expect(get.calls.count()).toBe(1);
        expect(date).toBeTruthy();
        expect(date.getTime()).toBe(SERVER_DATE.getTime());
      });
    }))
  );
});
