import { AppPage } from './app.po';
import { StaticCmp } from './static.po';
import { AsyncCmp } from './async.po';

describe('ng-ssr-sample App', () => {
  let page: AppPage;
  let staticCmp: StaticCmp;
  let asyncCmp: AsyncCmp;

  beforeEach(() => {
    page = new AppPage();
    staticCmp = new StaticCmp();
    asyncCmp = new AsyncCmp();
  });

  it('should display h1 message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual(page.H1_TEXT);
  });

  it('should display nav with links', () => {
    page.navigateTo();
    expect(page.getNavStaticLinkText()).toEqual(page.A1_TEXT);
    expect(page.getNavAsyncLinkText()).toEqual(page.A2_TEXT);
  });

  it('should display Static Component h2 message', () => {
    page.navigateTo();
    expect(staticCmp.getParagraphText()).toEqual(staticCmp.H2_TEXT);
  });

  it('should display Async Component when click Async link', () => {
    page.navigateTo();
    page.getNavAsyncLink().click();
    expect(asyncCmp.getParagraphText()).toEqual(asyncCmp.H2_TEXT);
  });
});
