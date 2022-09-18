const tweet_button1 = document.getElementById("tweet-button1")
const pic_button1 = document.getElementById("media")

// save the tweet text and clone the tweet place but does not display the content
tweet_button1.addEventListener("click" , ()=> {
    let tweet =  document.getElementById("tweets").value;
    if (tweet.length > 280 || tweet.length == 0){
        let div = document.getElementById("error")
        div.textContent  = "Tweet must be less than 280 char but not 0";
        div.style.color = "red";
    } else { 

        const div = document.getElementById("tweet-type-1")
        let clone = div.cloneNode(true);
        p = document.getElementById("p")

        document.getElementById("p").innerHTML = tweet;
        clone.classList.add("no-media-tweet")
        insertAfter(clone, div);

        //api
        const variables = new FormData();
        variables.append("iduser", 14);
        variables.append("tweettext", tweet);
        variables.append("media", 0);

        fetch('http://localhost/twitter%20clone/backend/send-tweet.php', {
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

    }

})

// tweet with media (not complete)
pic_button1.addEventListener("click" , ()=> { 
    let files = [],
    upload = document.getElementById("upload");

    upload.onchange = function() {
    for (var i=0;i<upload.files.length;i++) {
        files.push(upload.files[i].fileName);
    }}

    console.log(files)
})



