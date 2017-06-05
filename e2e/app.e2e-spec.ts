import { NotepadPage } from './app.po';

describe('notepad App', () => {
  let page: NotepadPage;

  beforeEach(() => {
    page = new NotepadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
