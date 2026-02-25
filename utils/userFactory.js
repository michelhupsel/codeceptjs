const { faker } = require('@faker-js/faker');

function createUser() {
  const password = faker.internet.password({ length: 8 });

  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    address: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state({ abbreviated: true }),
    zipCode: faker.location.zipCode(),
    phone: faker.phone.number('##########'),
    ssn: faker.string.numeric(9),
    username: faker.internet.username().toLowerCase() + Date.now(),
    password: password,
    confirmPassword: password
  };
}

module.exports = {
  createUser
};