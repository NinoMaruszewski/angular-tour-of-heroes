import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', async () => {
    await page.navigateTo();

    expect(await page.getTitleText()).toEqual(
      'angular-tour-of-heroes app is running!'
    );
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    if (browser.browserName === 'chrome') {
      // Fails on firefox
      const logs = await browser.manage().logs().get(logging.Type.BROWSER);

      // eslint-disable-next-line jasmine/no-expect-in-setup-teardown
      expect(logs).not.toContain(
        jasmine.objectContaining({
          level: logging.Level.SEVERE,
        } as logging.Entry)
      );
    }
  });
});
