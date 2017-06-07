import { TrumpetizePage } from './app.po';

describe('trumpetize App', () => {
  let page: TrumpetizePage;

  beforeEach(() => {
    page = new TrumpetizePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
