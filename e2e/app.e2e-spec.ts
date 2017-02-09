import { DataPersistencePage } from './app.po';

describe('data-persistence App', function() {
  let page: DataPersistencePage;

  beforeEach(() => {
    page = new DataPersistencePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
