//import functions here to run as seed file. 
const createRandomUser = require('./fakerSeedUser');
const generateUserTrips = require('./fakerSeedTrip');

// Generate 5 fake users
const fakeUsers = createRandomUser(5);

// Generate fake past and future trips for each user
const fakeUserTrips = generateUserTrips(fakeUsers);

console.log(fakeUsers);
console.log(fakeUserTrips);