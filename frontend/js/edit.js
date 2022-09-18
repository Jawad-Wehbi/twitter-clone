
const form = document.getElementById('form');


form.addEventListener('submit', function (e) {
    e.preventDefault();

    const variables = new FormData(form);
    const data = new URLSearchParams(variables)

    fetch('http://localhost/twitter%20clone/backend/edit-user-info.php', {
        method: "POST",
        body: data,
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
})