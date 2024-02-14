// Function to retrieve tripid from the URL
function gettripidFromUrl() {
  const url = window.location.href;
  const parts = url.split('/');
  const tripIndex = parts.indexOf('trips');
  if (tripIndex !== -1 && tripIndex < parts.length - 1) {
    return parts[tripIndex + 1];
  }
  return null;
}

// Function for fetching trip details from the server
async function fetchTripDetails(tripid) {
  try {
    const response = await fetch(`/api/trips/${tripid}`);
    if (!response.ok) {
      throw new Error('Failed to fetch trip details');
    }
    const tripData = await response.json();
    return tripData;
  } catch (error) {
    console.error(error);
  }
}

// Function to get comments for a trip from the server
async function fetchTripComments(tripid) {
  try {
    const response = await fetch(`/api/comments/${tripid}`);
    if (!response.ok) {
      throw new Error('Failed to fetch comments for this trip/no comments posted for this trip');
    }
    const comments = await response.json();
    return comments;
  } catch (error) {
    console.error(error);
  }
}

// Function to submit a new comment to the server
async function submitComment(tripid, commentContent) {
  try {
    const response = await fetch('/api/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        trip_id: tripid,
        content: commentContent
      })
    });
    if (!response.ok) {
      throw new Error('Failed to submit comment');
    }
    const newComment = await response.json();
    return newComment;
  } catch (error) {
    console.error(error);
  }
}

// Function to render trip details and comments using Handlebars
async function renderTripDetailsAndComments(tripid) {
  try {
    const tripDetails = await fetchTripDetails(tripid);
    const tripComments = await fetchTripComments(tripid);
    
    const template = Handlebars.compile(document.getElementById('singletrip-template').innerHTML);
    const html = template({ trip: tripDetails, comments: tripComments });
    document.getElementById('single-trip').innerHTML = html;
  } catch (error) {
    console.error('An error occurred when rendering trip details and comments:', error);
  }
}

// Event listener for submitting comments
document.getElementById('comment-form').addEventListener('submit', async function(event) {
  event.preventDefault();
  const tripid = this.dataset.tripid;
  const commentContent = this.querySelector('textarea').value;
  if (commentContent.trim() !== '') {
    const newComment = await submitComment(tripid, commentContent);
    if (newComment) {
      // Refresh after submission
      renderTripDetailsAndComments(tripid);
      // Clear comment input field
      this.querySelector('textarea').value = '';
    }
  }
});

// Call the renderTripDetailsAndComments function when the page loads
window.addEventListener('load', function() {
  const tripid = gettripidFromUrl();
  if (tripid) {
    // If tripid is retrieved successfully, render trip details and comments
    renderTripDetailsAndComments(tripid);
  } else {
    console.error('Trip ID not found in the URL');
    // Handle the case where tripid is not found in the URL
  }
});