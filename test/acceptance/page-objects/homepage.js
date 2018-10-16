const baseCommands = require('../commands/base');

const myCommands = {
  clickLink: function(){
    this.waitForElementVisible('@second_add_to_cart', 1000)
      .waitForElementVisible('@second_add_to_cart', 1000)
      .click('@second_add_to_cart')
      .api.pause(1000)
    return this;
  }
};

module.exports = {
    url: `http://localhost:3001/`,
    elements: {
      second_add_to_cart: "button[contains(@role, 'button') and text()='Add to Cart']"
    },
    commands: [baseCommands, myCommands]
};
