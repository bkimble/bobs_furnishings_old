const { clearBrowserData } = require('./helpers');

describe('/', () => {
  afterEach((browser, done) => {
      clearBrowserData(browser);
      browser.end(() => done());
  });
  
  it('should display the homepage', (browser) => {
    const page = browser.page.homepage()
    page
      .navigate()
    .waitForElementVisible('body')
    .waitForElementVisible('@second_add_to_cart', 5000)
    page.assert.containsText("span[contains(@class, 'minicart')", 'Cart (0 items)')
    .clickLink();
    page.assert.containsText("span[contains(@class, 'minicart')", 'Cart (4 items)')
  });  
});
