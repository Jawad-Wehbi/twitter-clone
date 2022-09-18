// to fetch php files

async function getData() {
    const response = await fetch(
      'http://localhost/twitter%20clone/backend/get-user-info.php'
    )
    const data = await response.json()
        
    data.forEach((line) => {
        
    })

    const names = document.querySelectorAll(".user_name")
    console.log(names.length)
    names.forEach((one) => {
    one.value = data.name
    console.log(d)
})
}

getData()
