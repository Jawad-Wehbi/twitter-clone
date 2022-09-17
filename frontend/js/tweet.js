const tweet_botton1 = document.getElementById("tweet-button1");
let text = document.getElementById("tweet-text").value;

tweet_botton1.addEventListener("click", () => {
    console.log(text.length)
    if (text.length > 280) {
        console.log("no")
    }
});