const { clearBrowserData } = require('./helpers');

describe('/', () => {
  afterEach((browser, done) => {
      clearBrowserData(browser);
      browser.end(() => done());
  });
  
  it('show the shopping cart', (browser) => {
    const page = browser.page.cart()
    page
    .navigate()
    .waitForElementVisible('body')
    .assert.containsText("h2", 'Shopping Cart')

    // .waitForElementVisible('@second_add_to_cart', 5000)
    // page.assert.containsText("span[contains(@class, 'minicart')", 'Cart (0 items)')
    // .clickLink();
    // page.assert.containsText("span[contains(@class, 'minicart')", 'Cart (4 items)')
  });  
});
