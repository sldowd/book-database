async function AddBookFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#book-title').value.trim();
    const author = document.querySelector('#book-author').value.trim();
    const yearCompleted = document.querySelector('#year-completed').value.trim();
    const userId = req.session.user_id;

    if (title && author && yearCompleted && userId) {

        const response = await fetch('api/books', {
            method: 'post',
            body: JSON.stringify({
                title,
                author,
                yearCompleted,
                userId
            }),
            headers: { 'Content-Type': 'application/json'}
        });
        if (response.ok) {
            console.log('book added');
            //document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
}  

document.querySelector('#add-book-form').addEventListener('submit', AddBookFormHandler);