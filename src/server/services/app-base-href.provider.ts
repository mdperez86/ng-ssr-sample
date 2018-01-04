import { DOCUMENT, APP_BASE_HREF } from '@angular/common';
import { TransferState } from '@angular/platform-browser';

import { LANG, BASE_HREF } from '../../shared/transfer-state.keys';

const appBaseHrefFactory = (ts: TransferState, doc: Document, lang: string, baseHref: string) => {
  ts.set(LANG, lang);
  ts.set(BASE_HREF, baseHref);
  const html = doc.querySelector('html');
  const base = doc.querySelector('base');
  html.setAttribute('lang', lang);
  base.setAttribute('href', baseHref);
  return baseHref;
};

export const appBaseHrefProvider = {
  provide: APP_BASE_HREF,
  deps: [TransferState, DOCUMENT, 'lang', 'baseHref'],
  useFactory: appBaseHrefFactory
};
