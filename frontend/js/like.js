// Like
const like_bottons = document.querySelectorAll(".like-button");
like_bottons.forEach((button) => {
    button.addEventListener("click", () => {
        button.src = "./img/liked.png";
 })
});