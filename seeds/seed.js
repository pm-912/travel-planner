

//import functions here to run as seed file. 
const generateFakeUsers = require('./fakerSeedUser');
const generateUserTrips = require('./fakerSeedTrip');
const generateFakeComments = require('./fakerSeedComment')

// Generate 5 fake users
const fakeUsers = generateFakeUsers(5);

// Generate fake past and future trips for each user
const fakeUserTrips = generateUserTrips(fakeUsers);

//Generate fake comments for each trip
const fakeTripComments = generateFakeComments(fakeUserTrips);

console.log(fakeUsers);
console.log(fakeUserTrips);
console.log(fakeTripComments);