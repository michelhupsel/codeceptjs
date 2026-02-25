const { I } = inject();

module.exports = {

  locators: {
    form: '#customerForm',

    firstName: '#customer\\.firstName',
    lastName: '#customer\\.lastName',
    address: '#customer\\.address\\.street',
    city: '#customer\\.address\\.city',
    state: '#customer\\.address\\.state',
    zipCode: '#customer\\.address\\.zipCode',
    phone: '#customer\\.phoneNumber',
    ssn: '#customer\\.ssn',
    username: '#customer\\.username',
    password: '#customer\\.password',
    confirmPassword: '#repeatedPassword',

    registerButton: 'input[value="Register"]'
  },

  open() {
    I.amOnPage('/register.htm');
  },

  fillForm(data) {
    I.waitForElement(this.locators.form, 10);

    I.fillField(this.locators.firstName, data.firstName);
    I.fillField(this.locators.lastName, data.lastName);
    I.fillField(this.locators.address, data.address);
    I.fillField(this.locators.city, data.city);
    I.fillField(this.locators.state, data.state);
    I.fillField(this.locators.zipCode, data.zipCode);
    I.fillField(this.locators.phone, data.phone);
    I.fillField(this.locators.ssn, data.ssn);
    I.fillField(this.locators.username, data.username);
    I.fillField(this.locators.password, data.password);
    I.fillField(this.locators.confirmPassword, data.confirmPassword);
  },

  submit() {
    I.click(this.locators.registerButton);
  }

};