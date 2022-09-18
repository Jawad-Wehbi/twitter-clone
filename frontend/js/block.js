// block
const block = document.getElementById("block");

block.addEventListener("click", () => {
        const blocked = document.getElementById("blocked");
        blocked.innerHTML = "blocked";
        blocked.classList.add("blocked")
        
        const variables = new FormData();
        variables.append("iduser", 14);
        variables.append("idblocked", 15);

        fetch('http://localhost/twitter%20clone/backend/like.php', {
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
 });