import { MyEventsAppPage } from './app.po';

describe('my-events-app App', () => {
  let page: MyEventsAppPage;

  beforeEach(() => {
    page = new MyEventsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
