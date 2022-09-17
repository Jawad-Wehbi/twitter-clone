const follow_buttons = document.querySelectorAll(".follow-button");
follow_buttons.forEach((button) => {
    button.addEventListener("click", () => {
        button.innerHTML = "Followed"
   })
});