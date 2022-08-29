document.querySelector('#getButton').addEventListener('click', apiRequest)


async function apiRequest(){
    const characterName = document.querySelector('input').value.toLowerCase()
    try{
        const response = await fetch(`https://stranger-things-api.herokuapp.com/api/v1/characters?name=${characterName}`)
        const data = await response.json() //turning response data to json
        console.log(data)

        document.getElementById('characterName').innerText = data[0].name
        document.getElementById('alias').innerText = data[0].aliases[0]
        document.getElementById('gender').innerText = data[0].gender
        document.getElementById('dob').innerText = data[0].born
        document.getElementById('residence').innerText = data[0].residence[0]

        document.getElementById('characterImage').src = data[0].photo
        document.getElementById('status').innerText = data[0].status
        

    } catch(error){
        console.log(error)
    }
}