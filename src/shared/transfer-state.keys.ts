import { makeStateKey } from '@angular/platform-browser';

export const LANG = makeStateKey<string>('LANG');
export const BASE_HREF = makeStateKey<string>('BASE_HREF');
