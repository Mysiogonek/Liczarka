<<<<<<< Updated upstream
usersDiv = document.querySelector("#users");

const createNewUser = (userName) => {
  let newUserDiv = document.createElement("div");
  newUserDiv.innerHTML = `
  <div>${userName}: <span id="suma">0</span></div>
  
  <input type="number" class="todo-input text-black px-2 py-1" placeholder="Wpisz punkty">
  <button class="btn-add bg-transparent border-2 rounded-md font-orbitron  text-white px-3 py-1 hover:bg-slate-700 active:bg-slate-900 tracking-wide">Dodaj</button>
  <button class="btn-reset tracking-wide border-2  bg-transparent  rounded-md font-orbitron  text-white ml-10 px-10 hover:bg-slate-700 active:bg-slate-900">Resetuj</button>
  <br><br>
  `;

  usersDiv.appendChild(newUserDiv);

  const addButton = newUserDiv.querySelector(".btn-add");
  const resetButton = newUserDiv.querySelector(".btn-reset");
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

  const resetPoints = () => {
    points.textContent = "0";
  };

  resetButton.addEventListener("click", resetPoints);
};

let newUserName;
do {
  newUserName = prompt("Jak masz na imię?");
  if (newUserName == null || newUserName.length < 1) {
    break;
  }
=======



usersDiv = document.querySelector("#users");




//button dodawania graczy
let gracz = document.createElement("button");
gracz.innerHTML=` <button class="btn-reset tracking-wide border-2  bg-transparent  rounded-md font-orbitron  text-white ml-10 px-10 hover:bg-slate-700 active:bg-slate-900">Dodaj gracza</button>
`;
usersDiv.appendChild(gracz);

//button dodawania imienia
let adding = document.createElement("button");
    adding.innerHTML = `
   <button class="btn-reset tracking-wide border-2  bg-transparent  rounded-md font-orbitron  text-white ml-10 px-10 hover:bg-slate-700 active:bg-slate-900">Dodaj</button>
   `;

//klik na button Dodaj gracza
const createInputField = () => {
    
    usersDiv.removeChild(gracz);
    let inputField = document.createElement("id");
    inputField.innerHTML=`
    <input type="text" class="todo-input text-black px-2 py-1" placeholder="Wpisz imię">`;
    usersDiv.appendChild(inputField);

    
    usersDiv.appendChild(adding);
};

gracz.addEventListener("click", createInputField);

//pobieranie wpisanego imienia

//klik na button Dodaj imię
const addName = () => {
    const inputName = document.querySelector("input");
    
    if (inputName.value != "") {
        //pobieram wpisane
         console.log("inputName.value", inputName.value);
        // tworzę kontener
         const ulList = document.createElement('ul');
         const linijka = document.createElement('li');
         linijka.textContent = inputName.value;
         usersDiv.appendChild(ulList);
         ulList.appendChild(linijka);       
   
        //czyszczę inputname.value
         inputName.value = "";
           };
          };

adding.addEventListener("click", addName);



//  input.addEventListener("keydown", function (event) {
//   if (event.code == "Enter") {
//    addPoints();
//    }
//   });

//   usersDiv.appendChild(resetuj);

//   const resetPoints = () => {
//     points.textContent = '0'
//   }
  
//   resetuj.addEventListener("click", resetPoints);
  
// };










 //let resetuj = document.createElement("button");
  //resetuj.innerHTML = `
  // <button class="btn-reset tracking-wide border-2  bg-transparent  rounded-md font-orbitron  text-white ml-10 px-10 hover:bg-slate-700 active:bg-slate-900">Resetuj</button>
  // `;




// const createNewUser = (userName) => {
//   let newUserDiv = document.createElement("div");
//   newUserDiv.innerHTML = `
//   <div>${userName}: <span id="suma">0</span></div>
  

//   <input type="number" class="todo-input text-black px-2 py-1" placeholder="Wpisz punkty">
//   <button class="btn-add bg-transparent border-2 rounded-md font-orbitron  text-white px-3 py-1 hover:bg-slate-700 active:bg-slate-900 tracking-wide">Dodaj</button>
//   <br><br>
//   `;
//   //usersDiv.appendChild(newUserDiv);
  


 


//   const addButton = newUserDiv.querySelector(".btn-add");
//   const input = newUserDiv.querySelector("input");
//   const points = newUserDiv.querySelector("#suma");
  
  
 

//   const addPoints = () => {
//     if (input.value !== "") {
//       console.log("input.value", input.value);
  
//       let a = parseInt(input.value);
//       input.value = "";
//       let b = parseInt(points.textContent) || 0;
  
//       console.log({ a, b });
  
//       points.textContent = a + b;
//     }
//   };

  
//    addButton.addEventListener("click", addPoints);
//  input.addEventListener("keydown", function (event) {
//   if (event.code == "Enter") {
//    addPoints();
//    }
//   });

//   usersDiv.appendChild(resetuj);

//   const resetPoints = () => {
//     points.textContent = '0'
//   }
  
//   resetuj.addEventListener("click", resetPoints);
  
// };


// let newUserName; 
// //do {
// //  newUserName = prompt("Jak masz na imię?");
//   //if (newUserName == null || newUserName.length < 1) {
//   //  break;
//  // }
//   //
//  // createNewUser(newUserName);
//  //} while (true);

// //createNewUser("Rafał");
// //createNewUser("Magda");


// //if (addPoints == true){
// //}

// const points = document.querySelectorAll("#suma");



>>>>>>> Stashed changes

  createNewUser(newUserName);
} while (true);
