//Function for fetching trip details from the server. 
async function fetchTripDetails(tripId) {
  try {
    const response = await fetch(`/api/trips/${tripId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch trip details');
    }
    const tripData = await response.json();
    return tripData;
  } catch (error) {
    console.error(error);
  }
}

//function to get comments for for a trip from the server.
async function fetchTripComments(tripId) {
  try {
    const response = await fetch(`/api/comments/${tripId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch comments for this trip/no comments posted for this trip');
    }
    const comments = await response.json();
    return comments;
  } catch (error) {
    console.error(error);
  }
}

//function to submit a new comment to the server
async function submitComment(tripId, commentContent) {
  try {
    const response = await fetch('/api/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        trip_id: tripId,
        content: commentContent
      })
    });
    if (!response.ok) {
      throw new Error('Failed to submit comment')
    }
    const newComment = await response.json();
    return newComment;
  } catch (error) {
    console.error(error);
  }
}
// Function to render trip details and comments using Handlebars
async function renderTripDetailsAndComments(tripId) {
  try {
    const tripDetails = await fetchTripDetails(tripId);
    const tripComments = await fetchTripComments(tripId);
    
    const template = Handlebars.compile(document.getElementById('single-trip-template').innerHTML);
    const html = template({ trip: tripDetails, comments: tripComments });
    document.getElementById('single-trip').innerHTML = html;
  } catch (error) {
    console.error('An error occured when rendering trip details and comments:', error);
  }
}


// Event listener for submitting
document.getElementById('comment-form').addEventListener('submit', async function(event) {
  event.preventDefault();
  const tripId = this.dataset.tripId;
  const commentContent = this.querySelector('textarea').value;
  if (commentContent.trim() !== '') {
      const newComment = await submitComment(tripId, commentContent);
      if (newComment) {
          // Refresh after submission
          renderTripDetailsAndComments(tripId);
          // Clear comment input field
          this.querySelector('textarea').value = '';
      }
  }
});

// Call the renderTripDetailsAndComments function when the page loads
window.addEventListener('load', function() {
  const tripId = req.params.id;
  renderTripDetailsAndComments(tripId);
});