const follow_buttons = document.querySelectorAll(".follow-button");
follow_buttons.forEach((button) => {
    button.addEventListener("click", () => {
        button.innerHTML = "Followed";
        const variables = new FormData();
        variables.append("iduser", iduser);
        variables.append("idfollowed", idfollowed);


        fetch('http://localhost/twitter%20clone/backend/follow.php', {
            mode: "no-cors",
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
});