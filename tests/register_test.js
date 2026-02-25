const { saveUser } = require('../utils/userData');
const { createUser } = require('../utils/userFactory');

Feature('Register');

Scenario('Create new user', async ({ I, register_page }) => {

  const user = createUser();

  register_page.open();
  register_page.fillForm(user);
  register_page.submit();

  saveUser(user); // salva apenas o último

}).tag('register');