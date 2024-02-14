//for trips
const { faker } = require('@faker-js/faker');

//array of available accommodations
const accommodationOptions = ['Hotel', 'AirBnB', 'Friend/Family', 'Camping', 'RV', null];

let tripIdCounter = 1;

// Function to create a single fake trip
const createFakeTrip = () => {
  // Randomly determine if it's a future trip
  const isFutureTrip = faker.datatype.boolean();

  // Generate a random departure date
  const departureDate = isFutureTrip ? faker.date.future() : faker.date.recent();


  // Return the trip object
  return {
    tripid: tripIdCounter++,
    destination: faker.location.city(),
    stayLength: faker.number.int({ min: 1, max: 14 }),
    departureDate: departureDate,
    accommodation: accommodationOptions[Math.floor(Math.random() * accommodationOptions.length)],
    description: faker.lorem.sentences(2),
    public: true
  };
};

// Function to generate fake past and future trips for each user
const generateUserTrips = (users) => {
  const userTrips = [];
  const numberOfUsers = users.length;

  users.forEach((user, index) => {
    // Generate one past trip and one future trip for each user
    const pastTrip = createFakeTrip();
    const futureTrip = createFakeTrip();

    // Assign the current user's id to the trip objects
    pastTrip.userid = user.userid;
    futureTrip.userid = user.userid;

    // Add the generated trips to the userTrips array
    userTrips.push(pastTrip, futureTrip);
  });

  return userTrips;
};

module.exports = generateUserTrips;
