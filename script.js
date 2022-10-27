 osoby = document.querySelector('#imie')
 divTodo = document.querySelector('.todo')
 paragraf = document.querySelector('#abc')
 let nowyDiv 
 let noweP 

const wczesniejszePunkty = document.querySelector("#suma") 
let przycisk = document.querySelector('.btn-add')
let input = document.querySelector('input') 
const wpisane = parseInt(input.value)
    

const dodawanie = () => {
    if (input.value !== '' ) {
   
     console.log('input.value', input.value)
     
     let a = (parseInt(input.value))
     input.value = ''
     let b = (parseInt(wczesniejszePunkty.textContent)) || 0;
 
     console.log({a, b})
 
     wczesniejszePunkty.textContent = a + b
    }  
 }



    przycisk.addEventListener('click', dodawanie)
    input.addEventListener('keydown', function(event) {
        if (event.code == 'Enter' ) {
          dodawanie()
        }
      });
    
     


 const stworzNowyDiv = () => {
    let nowyDiv = document.createElement('div')
    nowyDiv.innerHTML = '<span id="suma">uuu</span>';
   divTodo.appendChild(nowyDiv);
   const wczesniejszePunkty2 = document.querySelector("#suma") 
   
    let noweP = document.createElement('p');
    nowyDiv.appendChild(noweP)
    noweP.innerHTML = '<input type="number" class="todo-input" placeholder="Wpisz punkty">'
    
    let nowySpan = document.createElement('span');
    nowySpan.innerHTML = '<button class="btn-add">Dodaj</button> '
    noweP.appendChild(nowySpan)

    let input2 = document.querySelector('.todo-input')
   
   let button2 = document.querySelector('.btn-add')
  
}  
 
let person
const imiona = []

let i = 0
do {
    i++
    person = prompt("Jak masz na imię?")
    if (person !== null) {
    imiona.push(person);  
    stworzNowyDiv()    
    }
    
} while(person !== null) 

console.log(imiona)



