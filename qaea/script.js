function jedzenie(nazwa, cena){
    this.nazwa = nazwa
    this.cena = cena

    
}


const newFood = new jedzenie('golonka', 20)
const newFood2 = new jedzenie('pizza', 15)
const newFood3 = new jedzenie('kopytka', 10)

jedzenie.prototype.hello = function() {
    console.log(`${this.nazwa} kosztuje ${this.cena}`)
}


let przycisk1 = document.querySelector(."btn-1")
let przycisk2 = document.querySelector(."btn-2")
let przycisk3 = document.querySelector(."btn-3")

przycisk1.addEventListener("click", newFood.hello())

