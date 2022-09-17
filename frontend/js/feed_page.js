// toggle the logout button
const user_box = document.getElementById("user_info");
const log_out = document.getElementById("logout");

user_box.addEventListener("click", () => {
    log_out.classList.toggle("show");
});

// toggle the tweet pop up 
const pop_up = document.getElementById("tweet-pop")
const tweet_button = document.getElementById("side-tweet-button")

tweet_button.addEventListener("click", function(){
    pop_up.classList.toggle("show");
});

// clone

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

const cloneType1Tweet = () => {
    const div = document.getElementById("tweet-type-1")
    const body = document.getElementById("container-feed")
    const reference = document.getElementById("tweet1-section")
    const clone = div.cloneNode(true);
    clone.classList.add("no-media-tweet")
    insertAfter(clone, reference)
}

cloneType1Tweet()

const cloneType2Tweet = () => {
    const div = document.getElementById("tweet-tupe-2")
    const body = document.getElementById("container-feed")
    const reference = document.getElementById("tweet1-section")
    const clone = div.cloneNode(true);
    clone.classList.add("media-tweet")
    insertAfter(clone, reference)
}

cloneType2Tweet()
