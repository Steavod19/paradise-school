import { ParadiseSchoolPage } from './app.po';

describe('paradise-school App', () => {
  let page: ParadiseSchoolPage;

  beforeEach(() => {
    page = new ParadiseSchoolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
