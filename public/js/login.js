const loginForm = document.getElementById('login-form');
const signupForm = document.querySelector('.signup-form');

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const emailOrUsername = loginForm.elements['emailOrUsername'].value;
  const password = loginForm.elements['password'].value;
  try {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ emailOrUsername, password })
    });
    const data = await response.json();

    if (response.ok) {
      console.log('Login successful:', data);
      document.location.replace('/trips');
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Error during login:', error);
    // show err message 
  }
});

// 
const createNewAccount = async (e) => {
  e.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  console.log('User Input:', username, email, password);
  if (username && email && password) {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    console.log('Response:', response);

    if (response.ok) {
      document.location.replace('/trips');
    } else {
      alert(response.statusText);
    }
  }
};


signupForm.addEventListener('submit', (e) => {
  console.log(e)
  createNewAccount(e)
});
