import { DiTestPage } from './app.po';

describe('di-test App', function() {
  let page: DiTestPage;

  beforeEach(() => {
    page = new DiTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
