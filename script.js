
usersDiv = document.querySelector("#users");


const createNewUser = (userName) => {
  let newUserDiv = document.createElement("div");
  newUserDiv.innerHTML = `
  <div>${userName}: <span id="suma">0</span></div>
  
  <input type="number" class="todo-input" placeholder="Wpisz punkty">
  <button class="btn-add">Dodaj</button>
  <br><br>
  `;
  usersDiv.appendChild(newUserDiv);

  const addButton = newUserDiv.querySelector(".btn-add");
  const input = newUserDiv.querySelector("input");
  const points = newUserDiv.querySelector("#suma");

  const addPoints = () => {
    if (input.value !== "") {
      console.log("input.value", input.value);
  
      let a = parseInt(input.value);
      input.value = "";
      let b = parseInt(points.textContent) || 0;
  
      console.log({ a, b });
  
      points.textContent = a + b;
    }
  };

  
   addButton.addEventListener("click", addPoints);
 input.addEventListener("keydown", function (event) {
  if (event.code == "Enter") {
   addPoints();
   }
  });

 
};



let newUserName;
do {
  newUserName = prompt("Jak masz na imię?");
  if (newUserName == null || newUserName.length < 1) {
    break;
  }
  
  createNewUser(newUserName);
} while (true);
