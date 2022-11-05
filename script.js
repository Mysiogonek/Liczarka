// osoby = document.querySelector("#imie");
usersDiv = document.querySelector("#users");
// paragraf = document.querySelector("#abc");
// let nowyDiv;
// let noweP;

// const wczesniejszePunkty = document.querySelector("#suma");
// let przycisk = document.querySelector(".btn-add");
// let input = document.querySelector("input");
// const wpisane = parseInt(input.value);

const dodawanie = () => {
  if (input.value !== "") {
    console.log("input.value", input.value);

    let a = parseInt(input.value);
    input.value = "";
    let b = parseInt(wczesniejszePunkty.textContent) || 0;

    console.log({ a, b });

    wczesniejszePunkty.textContent = a + b;
  }
};

// przycisk.addEventListener("click", dodawanie);
// input.addEventListener("keydown", function (event) {
//   if (event.code == "Enter") {
//     dodawanie();
//   }
// });

const createNewUser = (userName) => {
  let newUserDiv = document.createElement("div");
  newUserDiv.innerHTML = `
  <div>${userName}</div>
  <span id="suma">0</span>
  <input type="number" class="todo-input" placeholder="Wpisz punkty">
  <button class="btn-add">Dodaj</button>
  `;
  usersDiv.appendChild(newUserDiv);

  const addButton = newUserDiv.querySelector(".btn-add");
  const input = newUserDiv.querySelector("input");
  const points = newUserDiv.querySelector("#suma");

  addButton.addEventListener("click", () => {
    alert(`Kliknęliśmy guzik użytkownika ${userName}`);
  });

  // const wczesniejszePunkty2 = document.querySelector("#suma");

  // let noweP = document.createElement("p");
  // noweP.innerHTML = userName;
  // newUserDiv.appendChild(noweP);
  // noweP.innerHTML = "";

  // let nowySpan = document.createElement("span");
  // nowySpan.innerHTML = " ";
  // noweP.appendChild(nowySpan);

  // let input2 = document.querySelector(".todo-input");

  // let button2 = document.querySelector(".btn-add");
};

// let person;
// const userNames = [];

let newUserName;
do {
  newUserName = prompt("Jak masz na imię?");
  if (newUserName.length < 1) {
    break;
  }
  // userNames.push(newUserName);
  createNewUser(newUserName);
} while (true);
