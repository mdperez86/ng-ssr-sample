import { browser, by, element } from 'protractor';

export class AsyncCmp {
  H2_TEXT = 'Async Component Rendered on Server Side';

  getParagraphText() {
    return element(by.css('app-async h2')).getText();
  }
}
