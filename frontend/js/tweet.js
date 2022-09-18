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
        const reference = document.getElementById("tweet1-section")
        let clone = div.cloneNode(true);
        p = document.getElementById("p")

        document.getElementById("p").innerHTML = tweet;
        clone.classList.add("no-media-tweet")
        insertAfter(clone, div);
    }
})

pic_button1.addEventListener("click" , ()=> { 
    let files = [],
    upload = document.getElementById("upload");

    upload.onchange = function() {
    for (var i=0;i<upload.files.length;i++) {
        files.push(upload.files[i].fileName);
    }}

    console.log(files)
})



