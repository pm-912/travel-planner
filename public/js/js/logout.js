const logout = async () => {
    try {
        const response = await fetch('/api/users/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            document.location.replace('/');// redirect to HP
        } else {
            const responseData = await response.json();
            console.error('Logout failed:', responseData.message);
            // err message to user
        }
    } catch (error) {
        console.error('Error during logout:', error);
        // show err message
    }
};

document.querySelector('#logout').addEventListener('click', logout);
