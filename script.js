
usersDiv = document.querySelector("#users");


let resetuj = document.createElement("button");
  resetuj.innerHTML = `
  <button class="btn-reset tracking-wide border-2  bg-transparent  rounded-md font-orbitron  text-white ml-10 px-10 hover:bg-slate-700 active:bg-slate-900">Resetuj</button>
  `;


let newUserName;
do {
  newUserName = prompt("Jak masz na imię?");
  if (newUserName == null || newUserName.length < 1) {
  break;
   }
  



const createNewUser = (userName) => {
  let newUserDiv = document.createElement("div");
  newUserDiv.innerHTML = `
  <div>${userName}: <span id="suma">0</span></div>
  
  <input type="number" class="todo-input text-black px-2 py-1" placeholder="Wpisz punkty">
  <button class="btn-add bg-transparent border-2 rounded-md font-orbitron  text-white px-3 py-1 hover:bg-slate-700 active:bg-slate-900 tracking-wide">Dodaj</button>
  <br><br>
  `;
  usersDiv.appendChild(newUserDiv);
  
  
  createNewUser(newUserName);

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



// } while (true);




//if (addPoints == true){
//}

const points = document.querySelectorAll("#suma");


