import { MoveUpClientPage } from './app.po';

describe('move-up-client App', function() {
  let page: MoveUpClientPage;

  beforeEach(() => {
    page = new MoveUpClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
