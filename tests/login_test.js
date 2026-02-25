const { getUser } = require('../utils/userData');

Feature('Login');

Scenario('Login with last created user', async ({ I }) => {

  const user = getUser();

  I.amOnPage('/index.htm');

  I.fillField('input[name="username"]', user.username);
  I.fillField('input[name="password"]', user.password);
  I.click('input[value="Log In"]');

}).tag('login');