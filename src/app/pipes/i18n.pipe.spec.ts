import { I18nPipe } from './i18n.pipe';

describe('I18nPipe', () => {
  it('create an instance', () => {
    const pipe = new I18nPipe(<any>{ get: (k) => k });
    expect(pipe).toBeTruthy();
  });
});
