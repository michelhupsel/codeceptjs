const Checkout = require("../pages/Checkout");

Feature('Checkout');

Scenario('test for cats list', async ({ I }) => {
  // we select one product and switched to checkout project
  I.amOnPage('/');
  I.wait(3);
  I.click('//a[text()="Register"]');
  I.wait(10);
  // Checkout.open();
  // Checkout.search('CodeceptJS');
  //   I.click('Coffee Cup');
  //   I.click('Purchase');
  //   I.click('Checkout');

  //   // fill in the shipping address
  // I.fillField('First Name', 'John');
  //   I.fillField('Last Name', 'Doe');
  //   I.fillField('Address', '123 Main St.');
  //   I.fillField('City', 'New York');
  //   I.selectOption('State', 'New York');
  //   I.fillField('Zip Code', '10001');

  //   // select a payment method
  //   I.click('#credit-card-option');
  //   I.fillField('Card Number', '1234-5678-9012-3456');
  //   I.fillField('Expiration Date', '12/22');
  //   I.fillField('Security Code', '123');

  //   // click the checkout button
  //   I.click('Checkout');

  //   // verify that the checkout was successful
  //   I.see('Your order has been placed successfully!');
});
