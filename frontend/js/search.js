const search_botton = document.getElementById("search-button");

search_botton.addEventListener("click",() => {
    let search = document.getElementById("search-input").value;
    postName(search)
}
)


async function postName(search) {
    const object = { name: search };
    const response = await fetch('localhost/twitter%20clone/backend/search.php', {
      method: 'POST',
      name: JSON.stringify(object)
    });
    const responseText = await response.text();
    console.log(responseText); // logs 'OK'
  }
///async function getData() {
//    const response = await fetch(
//      'http://localhost/twitter%20clone/backend/search.php'
//    )
 //   const data = await response.json()
        
//    data.forEach((line) => {
 //       console.log(line.name)
//    })
//}



