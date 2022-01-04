
const url = "http://localhost:3000";

const submitButton = document.querySelector("#submit")
const username = document.querySelector("#username")
const password = document.querySelector("#password")

async function handleSubmit(){
    const response = await fetch(`${url}/users/${username.value}`)
    const { payload } = await response.json();
    // console.log(payload[0].password)

    if(username.value === payload[0].username &&
        password.value === payload[0].password) {
            window.location.href = 'artist.html'
        } else {
            alert("Wrong Username or Password!")
        }
}


