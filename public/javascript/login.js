async function loginFormHandler() {
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    const response = await fetch('api/users/login', {
        method: 'post',
        body: JSON.stringify({
            email,
            password
        }),
        headers: { 'Content-Type': 'application/json'}
    })
    if (response.ok) {
        document.location.replace('/dashboard');
        console.log('login success', response)
    } else {
        alert(response.statusText);
    }
};

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);