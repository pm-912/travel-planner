const newTripBtn = document.querySelector('.plan')

const submitTrip = async (e) => {
    e.preventDefault();
    const destination = document.querySelector('#destination').value.trim();
    const stayLength = document.querySelector('#stay-length').value.trim();
    const departureDate = document.querySelector('#trip-date').value.trim();
    const accommodation = document.querySelector('#accommodation').value.trim();
    const description = document.querySelector('#trip-desc').value.trim();
    // const isPublic = document.querySelector('#privacy').checked;
    try {
        // post req. for data
        const response = await fetch('/api/trips', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ destination, stayLength, departureDate, accommodation, description })
        });
        console.log(response);
        // if submitted properly
        if (response.ok) {
            const newTrip = await response.json();
            console.log('Trip submitted successfully:', newTrip);
            document.location.replace('/trips')
            return newTrip;
        } else {
            // err failed to submit
            const errorData = await response.json();
            console.error('Failed to submit trip:', errorData.message);
            throw new Error(errorData.message);
        }
    } catch (error) {
        console.error('Error during trip submission:', error);
        throw error; // throw more err again
    }
};

newTripBtn.addEventListener('submit', (data) => {
    submitTrip(data)
})