import { browser, by, element } from 'protractor';

export class StaticCmp {
  H2_TEXT = 'Static Component Rendered on Server Side';

  getParagraphText() {
    return element(by.css('app-static h2')).getText();
  }
}
