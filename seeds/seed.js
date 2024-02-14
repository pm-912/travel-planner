const db = require('../models'); // Import your Sequelize models
const generateFakeUsers = require('./fakerSeedUser');
const generateUserTrips = require('./fakerSeedTrip');
const generateFakeComments = require('./fakerSeedComment');

// Define the seeding function
const seedDatabase = async () => {
  try {
    // Sync with Sequelize to clear the database
    await db.sequelize.sync({ force: true });

    // Generate fake users
    const fakeUsers = await generateFakeUsers(5);

    // Generate fake past and future trips for each user
    const fakeUserTrips = await generateUserTrips(fakeUsers);

    // Generate fake comments for each trip
    const fakeTripComments = await generateFakeComments(fakeUserTrips);

    // Log the generated data
    console.log(fakeUsers);
    console.log(fakeUserTrips);
    console.log(fakeTripComments);

    // Seed the data into the database
    const users = await db.User.bulkCreate(fakeUsers, {
      individualHooks: true
    });

    await db.Trip.bulkCreate(fakeUserTrips);
    await db.Comment.bulkCreate(fakeTripComments);

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

// Call the seeding function
seedDatabase();