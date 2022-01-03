const url = "http://localhost:3000";

const inputRequestCode = document.querySelector("#request-code");
const songTitle = document.querySelector("#song-title");
const artistName = document.querySelector("#artist-name");
const yourName = document.querySelector("#your-name");
const submitBtn = document.querySelector("#submit");


submitBtn.addEventListener("click", handleSubmit)


function handleLogin(){
  alert("Login!")
}

function handleSubmit(event) {
  event.preventDefault();
  const requestCodeValue = inputRequestCode.value
  if (requestCodeValue === "1234") {
    addRequest();
    inputRequestCode.value = ""
    inputRequestCode.setAttribute("placeholder", "REQUEST CODE")
    alert("Request Successful!")
  } else {
    inputRequestCode.value = ""
    inputRequestCode.setAttribute("placeholder", "**INCORRECT CODE!**")
  }

}

async function addRequest() {
  console.log(gatherFormData());
  const response = await fetch(`${url}/requests`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(gatherFormData()),
  });
  const data = await response.json();
  console.log(data);
  inputRequestCode.value = "";
  songTitle.value = "";
  artistName.value = "";
  yourName.value = "";
  
}

function gatherFormData() {
  const title = songTitle.value;
  const artist = artistName.value;
  const user = yourName.value;
  return {
    title,
    artist,
    user,
  };
}