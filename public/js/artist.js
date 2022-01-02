
const url = "http://localhost:3000";


const deleteAllBtn = document.querySelector("#delete-all")

deleteAllBtn.addEventListener("click", async() => {

    const confirmDelete = confirm("Are you sure you want to Delete ALL requests?")

    if (confirmDelete) {
        location.reload();
        await fetch(`${url}/requests`, {
            method: "DELETE"
          });
        }
});


function handleClick(event) {
    event.preventDefault();
    getRequests();
  }
  
  async function getRequests() {
    const response = await fetch(`${url}/requests`);
    const { payload } = await response.json();
    console.log(payload);
    payload.forEach(renderRequest);
  }
  
  function renderRequest(request) {
    const title = request.title;
    const artist = request.artist;
    const username = request.username;
    console.log(title, artist, username);
    updateTable(title, artist, username);
  }
  
  function updateTable(title, artist, username){
      const table = document.querySelector("table")
      const newRow = document.createElement("tr");
      const newTitle = document.createElement("td");
      const newArtist = document.createElement("td");
      const newUsername = document.createElement("td");
      const deleteButton = document.createElement("td")
      
      newTitle.innerText = title;
      newArtist.innerText = artist;
      newUsername.innerText = username;
      deleteButton.innerHTML = `<a href="index.html"><img src="./images/delete-button.png" alt="Delete Button" id="delete-button"></a>`;

      table.appendChild(newRow)
      newRow.appendChild(newTitle)
      newRow.appendChild(newArtist)
      newRow.appendChild(newUsername)
      newRow.appendChild(deleteButton)
      return table
  }


    getRequests()