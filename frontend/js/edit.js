localStorage.setItem("user_name", "Souraya")
localStorage.setItem("user_tag", "@souraya")
localStorage.setItem("user_bio", "hello there")
localStorage.setItem("user_birthday", "22/05/1996")


const save_button = document.getElementById("save-button");

save_button.addEventListener("click", () => {
    let user_name = document.getElementById("user_name").value;
    let user_tag = document.getElementById("user_tag").value;
    let user_bio = document.getElementById("user_bio").value;
    let user_birthday = document.getElementById("user_birthday").value;
    console.log(user_birthday)
    console.log(typeof(user_birthday))

    localStorage.setItem("user_name", user_name);
    localStorage.setItem("user_tag", user_tag);
    //localStorage.setItem("user_bio", user_bio);
    localStorage.setItem("user_birthday", user_birthday);
    

})