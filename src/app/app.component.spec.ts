import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    expect(component.title).toEqual('app');
  }));

  it('should render h1 element', async(() => {
    expect(compiled.querySelector('h1').textContent)
      .toContain('This is rendered on server side');
  }));

  it('should render nav element', async(() => {
    expect(compiled.querySelector('nav')).toBeTruthy();
  }));

  it('should render static link element', async(() => {
    expect(compiled.querySelector('nav a:first-child').textContent)
      .toContain('Static');
  }));

  it('should render async link element', async(() => {
    expect(compiled.querySelector('nav a:last-child').textContent)
      .toContain('Async');
  }));
});
