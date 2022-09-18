localStorage.setItem("user_name", "Souraya")
localStorage.setItem("user_tag", "@souraya")
localStorage.setItem("user_bio", "hello there")
localStorage.setItem("user_birthday", "22/05/1996")


const save_button = document.getElementById("save-button");

const save = (user_name, user_tag,user_bio, user_birthday) => {
    localStorage.setItem("user_name", user_name);
    localStorage.setItem("user_tag", user_tag);
    localStorage.setItem("user_bio", user_bio);
    localStorage.setItem("user_birthday", user_birthday);
}

save_button.addEventListener("click", () => {
    let user_name = document.getElementById("user_name").value;
    let user_tag = document.getElementById("user_tag").value;
    let user_bio = document.getElementById("user_bio").value;
    let user_birthday = document.getElementById("user_birthday").value;
    //let profile_pictue = document.getElementById("profile_picture");
    //let header_picture = document.getElementById("header_picture");
    save(user_name, user_tag,user_bio, user_birthday)
    const message = document.getElementById("save-message")
    message.innerHTML = " Info saved "
    document.getElementById("user_name").value = "";
    document.getElementById("user_tag").value = "";
    document.getElementById("user_bio").value = "";
    document.getElementById("user_birthday").value = "";
})

 
function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
   
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    
    var dataURL = canvas.toDataURL("image/png");
    
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

function fetchimage ()
{
    var dataImage = localStorage.getItem('imgData');
    var bannerImg = document.getElementById('tableBanner');
     bannerImg.src = "data:image/png;base64," + dataImage;
}
