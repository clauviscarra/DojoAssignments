import { RoutingProjectPage } from './app.po';

describe('routing-project App', () => {
  let page: RoutingProjectPage;

  beforeEach(() => {
    page = new RoutingProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
