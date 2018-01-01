import { browser, by, element } from 'protractor';

export class AppPage {
  H1_TEXT = 'THIS IS RENDERED ON SERVER SIDE';
  A1_TEXT = 'Static';
  A2_TEXT = 'Async';

  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getNavStaticLink() {
    return element(by.css('app-root nav a:first-child'));
  }

  getNavAsyncLink() {
    return element(by.css('app-root nav a:last-child'));
  }

  getNavStaticLinkText() {
    return this.getNavStaticLink().getText();
  }

  getNavAsyncLinkText() {
    return this.getNavAsyncLink().getText();
  }
}
