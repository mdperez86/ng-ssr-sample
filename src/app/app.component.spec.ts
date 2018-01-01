import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { RouterLinkStubDirective, RouterOutletStubComponent } from '../testing/router-stubs';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compiled: any;
  let linkDes: any[];
  let links: RouterLinkStubDirective[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, RouterLinkStubDirective, RouterOutletStubComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    linkDes = fixture.debugElement.queryAll(By.directive(RouterLinkStubDirective));
    links = linkDes.map(de => de.injector.get(RouterLinkStubDirective));
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

  it('should get RouterLinks from template', async(() => {
    expect(links.length).toBe(2, 'should have 2 links');
    expect(links[0].routerLink).toBe('/', '1st link should go to Static Component');
    expect(links[1].routerLink).toBe('/async', '2nd link should go to Async Component');
  }));
});
