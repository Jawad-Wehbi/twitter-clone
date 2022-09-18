// to fetch php files

async function getData() {
    const response = await fetch(
      'http://localhost/twitter%20clone/backend/get-user-info.php'
    )
    const data = await response.json()
        
    data.forEach((line) => {
        console.log(line.name)
    })
}

getData()