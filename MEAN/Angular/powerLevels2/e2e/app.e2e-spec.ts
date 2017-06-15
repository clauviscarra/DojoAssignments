import { PowerLevels2Page } from './app.po';

describe('power-levels2 App', () => {
  let page: PowerLevels2Page;

  beforeEach(() => {
    page = new PowerLevels2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
