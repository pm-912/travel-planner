const { faker } = require('@faker-js/faker');

let userIdCounter = 1;

function createRandomUser()  {
  return {
    userid: userIdCounter++,
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}

const generateFakeUsers = (count) => faker.helpers.multiple(createRandomUser, { count });

module.exports = generateFakeUsers;
