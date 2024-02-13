const { faker } = require('@faker-js/faker');

// Function to create a single fake comment
const createFakeComment = () => {
  return {
    content: faker.lorem.sentences(3),
    createdon: faker.date.recent()
  };
};

// Function to generate fake comments for each trip
const generateTripComments = (trips) => {
  const tripComments = [];

  trips.forEach((trip) => {
    // Generate a fake comment for each trip
    const comment = createFakeComment();
    // Associate the comment with the current trip
    comment.tripid = trip.tripid;
    tripComments.push(comment);
  });

  return tripComments;
};

module.exports = generateTripComments;