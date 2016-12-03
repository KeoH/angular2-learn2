import { JaNGmendoPage } from './app.po';

describe('ja-ngmendo App', function() {
  let page: JaNGmendoPage;

  beforeEach(() => {
    page = new JaNGmendoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
