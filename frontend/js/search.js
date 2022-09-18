const search_botton = document.getElementById("search-button");

search_botton.addEventListener("click",() => {
    let search = document.getElementById("search-input").value;
    
    const variables = new FormData();
    variables.append("search", search)
    
    fetch('http://localhost/twitter%20clone/backend/search.php', {
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
            .then(data => 
                {console.log(data.name)})
            .catch(err => console.log(err));
 

}
)



