 osoby = document.querySelector('#imie')
 divTodo = document.querySelector('.todo')
 paragraf = document.querySelector('#abc')
 let nowyDiv 
 let noweP 
 
    
 const stworzNowyDiv = () => {
    let nowyDiv = document.createElement('div')
    nowyDiv.innerHTML = '<span id="suma">uuu</span>';
   divTodo.appendChild(nowyDiv);
   
    let noweP = document.createElement('p');
    //noweP.id = 'abc'
    noweP.innerHTML = '<input type="number" class="todo-input" placeholder="Wpisz punkty"> <button class="btn-add">Dodaj</button>';
    nowyDiv.appendChild(noweP)
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
    //divTodo.appendChild(nowyDiv); - czemu jak tu bylo to sie tlyko jeden div tworzyl, a jak dodalam to do funkcji stworznowydiv to dziala jak nalezy???
    //stworzNoweP()  z tym sie tylko jeden div tworzy
    
    }
    
} while(person !== null) 

console.log(imiona)

let przycisk = document.querySelector('.btn-add')
let input = document.querySelector('input') 
const wpisane = parseInt(input.value)
const wczesniejszePunkty = document.querySelector("#suma")


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










/* 
const main = () => {
    prepareDOMElements
    prepareDOMEvents
};




const prepareDOMElements = () => {
    todoInput = document.querySelector('.todo-input')
    errorInfo = document.querySelector('.error-info')
    addBtn = document.querySelector('.btn-add')
    ulList = document.querySelector('.todolist ul')
    popup = document.querySelector('.popup')
    popupInfo = document.querySelector('.popup-info')
    
    popupInput = document.querySelector('.popup-input')
    popupAddBtn = document.querySelector('.accept')
    popupCloseBtn = document.querySelector('.cancel')
};

const prepareDOMEvents = () => {
    addBtn.addEventListener('click', addNewTodo)
    ulList.addEventListener('click', checkClick)
    popupCloseBtn.addEventListener('click', closePopup)
};

const addNewTodo = () => {
    if (todoInput.value = !== '') {
        newTodo = document.createElement('li');
        newTodo.textContent = todoInput.value
        ulList.append(newTodo)

        createToolsArea()

        todoInput.value = ''
        errorInfo.textContent = ''
    } else {
        errorInfo.textContent = 'Wpisz treść zadania'
    }
}

const createToolsArea = () => {
    const toolsPanel = document.createElement('div')
    toolsPanel.classList.add('tools')
    newTodo.append(toolsPanel)

    const completeBtn = document.createElement('button')
    completeBtn.classList.add('complete')
    completeBtn.innerHTML = '<i class="fas fa-check"></i>'

    const editBtn = document.createElement('button')
    editBtn.classList.add('edit')
    editBtn.textContent = 'EDIT'


    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete')
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>'

    toolsPanel.append(completeBtn, editBtn, deleteBtn)
   
}

const checkClick = e => {
    if(e.target.matches('.complete')) {
        e.target.closest('li').classList.toggle('completed')
        e.target.classList.toggle.('completed')
    } else if(e.target.matches('.edit')) {
        editTodo();
    } else if (e.target.matches('.delete'))
    deleteTodo(e)
}
}
const editTodo = e => {
    todoToEdit = e.target.closest('li')
    popupInput.value = todoToEdit.firstChild.textContent
    popup.style.display = 'flex'
}

const closePopup = () => {
    popup.style.display = 'none'
    popupInfo.textContent = ''
}

const changeTodoText = () => {
    if(popupInput.value = !== '') {
        todoToEdit.firstChild.textContent = popupInput.value
        popup.style.display = 'none'
        popupInfo.textContent = ''
    } else {
        popupInfo.textContent = 'musisz podac jakas tresc'
    }
}

const deleteTodo = e => {

        e.target.closest ('li').remove

}
 

document.addEventListener('DOMContentLoaded', main);
*/