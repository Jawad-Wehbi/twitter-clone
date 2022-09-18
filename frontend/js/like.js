// Like
// still have to retrieve idtweet and iduser
const like_bottons = document.querySelectorAll(".like-button");
like_bottons.forEach((button) => {
    button.addEventListener("click", () => {
        button.src = "./img/liked.png";
        const variables = new FormData();
        variables.append("idtweet", 14);
        variables.append("idliker", 15);

        fetch('http://localhost/twitter%20clone/backend/like.php', {
            mode: "no-cors",
            method: "POST",
            body: variables
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
});