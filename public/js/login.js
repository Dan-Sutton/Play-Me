
const url = "http://localhost:3000";

const submitButton = document.querySelector("#submit")
const username = document.querySelector("#username")
const password = document.querySelector("#password")

async function handleSubmit(){
    const response = await fetch(`${url}/users/${username.value}`)
    const { payload } = await response.json();
    console.log(payload)
}


