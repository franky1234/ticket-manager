import { TicketManagerFrontendPage } from './app.po';

describe('ticket-manager-frontend App', function() {
  let page: TicketManagerFrontendPage;

  beforeEach(() => {
    page = new TicketManagerFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
