const pop_up = document.getElementById("tweet-pop")
const tweet_button = document.getElementById("side-tweet-button")
tweet_button.addEventListener("click", function(){
    pop_up.classList.toggle("show");
});