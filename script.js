
usersDiv = document.querySelector("#users");
//historiaDiv = document.querySelector("#logi")


let resetuj = document.createElement("button");
  resetuj.innerHTML = `
  <button class="btn-reset">Resetuj</button>
  `;


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

  usersDiv.appendChild(resetuj);

  const resetPoints = () => {
    points.textContent = '0'
  }
  
  resetuj.addEventListener("click", resetPoints);
  
};


let newUserName;
do {
  newUserName = prompt("Jak masz na imię?");
  if (newUserName == null || newUserName.length < 1) {
    break;
  }
  
  createNewUser(newUserName);
} while (true);


//if (addPoints == true){
//}

const points = document.querySelectorAll("#suma");


