/*


async function success() {
    const response = await fetch(
        'http://localhost/twitter%20clone/backend/edit-user-info.php'
    )
    const data = await response.json()
    console.log(data)
}
 
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
}*/

/*const save = document.getElementById("save")

save.addEventListener("click", ()=> {
    const input_name = document.getElementById("name").value;
    const input_bio = document.getElementById("name").value;
    const input_tag = document.getElementById("name").value;
    const input_birthday = document.getElementById("name").value;

    fetch('http://localhost/twitter%20clone/backend/edit-user-info.php', {
        method: 'POST',
        body: new URLSearchParams({
          ame: input_name,
          bio: input_bio,
          tag: input_tag,
          birthday: input_birthday,
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data.name)})
      })
    console.log(input_name)
});*/

