

const form = document.getElementById('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const variables = new FormData(from);
    // const data = new URLSearchParams(variables)

    // variables.append("name", "issa");
    // variables.append("tag", "tag");
    // variables.append("bio", "hey");
    // variables.append("birthday", "22/02/2000");

    fetch('http://localhost/twitter%20clone/backend/edit_info_php', {
        method: "POST",
        body: variables,
    })
        .then(result => {
            if(result.status !== 200) {
                throw new Error("Bad Server Responce");
            }
            return result.text();
        })
        .then(data => console.log(data))
        .catch(err => console.log(err));
})

window.onload(





)