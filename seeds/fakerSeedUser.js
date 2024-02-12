const faker = require('faker');

function createRandomUser() {
  return {
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}

const generateFakeUsers = (count) => faker.helpers.multiple(createFakeUser, { count });

module.exports = USERS;