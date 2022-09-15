// toggle the logout button
const user_box = document.getElementById("user_info");
const log_out = document.getElementById("logout");

user_box.addEventListener("click", function(){
    log_out.classList.toggle("show");
});

// toggle the tweet pop up 
const pop_up = document.getElementById("tweet-pop")
const tweet_button = document.getElementById("side-tweet-button")

tweet_button.addEventListener("click", function(){
    pop_up.classList.toggle("show");
});
