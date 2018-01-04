import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncComponent } from './async.component';
import { ApiService } from './services/api.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('AsyncComponent', () => {
  let component: AsyncComponent;
  let fixture: ComponentFixture<AsyncComponent>;
  let compiled: any;

  const SERVER_DATE = Date.now();
  const apiServiceStub = {
    getDate: () => Observable.of(SERVER_DATE)
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AsyncComponent],
      providers: [{ provide: ApiService, useValue: apiServiceStub }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create the component', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should render h2 element', async(() => {
    expect(compiled.querySelector('h2').textContent)
      .toContain('Async Component Rendered on Server Side');
  }));

  it('should render dd element with server date', async(() => {
    expect(compiled.querySelector('dl dt').textContent)
      .toContain('Server Date');
    expect(compiled.querySelector('dl dd').textContent)
      .toContain(SERVER_DATE);
  }));
});
