//Function for fetching trip details from the server. 
async function fetchTripDetails(tripID) {
  try {
    const response = await.fetch(`/api/trips/${tripId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch trip details');
    }
    const tripData = await response.json();
    return tripData;
  } catch (error) {
    console.error(error);
  }
}