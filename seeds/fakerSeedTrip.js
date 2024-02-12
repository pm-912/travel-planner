//for trips
const { faker } = require('@faker-js/faker');
const Trip = require('../models/tripModel');
const User = require('../models/userModel');


//array of available accommodations
const accommodationOptions = ['Hotel', 'AirBnB', 'Friend/Family', 'Camping', 'RV', null];

// Function to create a single fake trip
const createFakeTrip = () => ({
  destination:faker.location.city()(),
  stayLength: faker.random.number({ min: 1, max: 14 }),
  departureDate: faker.date.between(new Date(), faker.date.future()), // Generate a fake future or present departure date
  accommodation: faker.random.arrayElement(accommodationOptions), // Randomly select an accommodation option
  public: true // Set public to true for all trips
});

// Function to generate fake past and future trips for each user
const generateUserTrips = (users) => {
  const userTrips = [];
  const numberOfUsers = users.length;

  users.forEach((user, index) => {
    // Generate one past trip and one future trip for each user
    const pastTrip = createFakeTrip();
    const futureTrip = createFakeTrip();

    // Assign the current user's id to the trip objects
    pastTrip.UserId = user.id;
    futureTrip.UserId = user.id;

    // Add the generated trips to the userTrips array
    userTrips.push(pastTrip, futureTrip);
  });

  return userTrips;
};

module.exports = generateUserTrips;
