const save = document.getElementById('save-button');

//In this part we're missing the following parts:
// to have a perfectly working edit page, we have to check if the inpus are empty or not
//check the validation of the inputs
//set the inputs to the actual data to send it to the query 

save.addEventListener('submit', function () {
    let name = document.getElementById("user_name").value;
    let tag = document.getElementById("user_tag").value;
    let bio = document.getElementById("user_bio").value;
    let birthday = document.getElementById("user_birthday").value;
    let profilepic = document.getElementById("profile-picture").value;
    let headerpic = document.getElementById("header-picture").value;
    
    let newpic = getBase64Image(profilepic);
    let newheader = getBase64Image(headerpic);


    const variables = new FormData();
    variables.append("id", iduser);
    variables.append("name", name);
    variables.append("tag", tag);
    variables.append("bio", bio);
    variables.append("birthday", birthday);
    variables.append("profilepic", newpic);
    variables.append("headerpic", newheader);

    fetch('http://localhost/twitter%20clone/backend/edit_info_php', {
        mode: "no-cors",
        method: "POST",
        body: variables,
    })
        .then(result => {
            if(result.status !== 200) {
                throw new Error("Bad Server Responce");
            }
            return result.text();
        })
        .then(data => console.log(data))
        .catch(err => console.log(err));
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