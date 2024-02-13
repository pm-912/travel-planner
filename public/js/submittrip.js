const submitTrip = async (tripData) => {
    try {
        // post req. for data
        const response = await fetch('/api/trips', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tripData)
        });

        // if submitted properly
        if (response.ok) {
            const newTrip = await response.json();
            console.log('Trip submitted successfully:', newTrip);
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

