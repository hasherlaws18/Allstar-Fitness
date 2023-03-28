// makes post request to respective login endpoint
async function loginFormHandler(event) {
    event.preventDefault();

    const username = docuemnt.querySelector(#username-login).value.trim;
    const password = docuemnt.querySelector(#password-login).value.trim;

if (username && password) {
    const response = await fetch('/users/login', {
        method: 'POST',
        body: JSON.stringify({
            username,
            password
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(reponse.statusText);
        }
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

