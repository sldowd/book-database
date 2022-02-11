async function logoutButtonHandler(event) {
    event.preventDefault();

    const response = await fetch('api/users/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json'}
    })

    if (response.ok) {
        document.location.replace('/');
        console.log('logged out');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('#logout').addEventListener('click', logoutButtonHandler);