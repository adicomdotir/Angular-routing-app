import { AngularRoutingAppPage } from './app.po';

describe('angular-routing-app App', () => {
  let page: AngularRoutingAppPage;

  beforeEach(() => {
    page = new AngularRoutingAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
