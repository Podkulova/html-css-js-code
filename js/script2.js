class Movie {
    constructor(id, title, director, year){
        this.id = id;
        this.title = title;
        this.director = director;
        this.year = year;
    }
}

const requiemForADream = new Movie(1, "Requiem for a Dream", "Darren Aronofsky", 2000);
const donnieDarko = new Movie(2, "Donnie Darko", "Richard Kelly", 2001);
const littleMissSunshine = new Movie(3, "Little Miss Sunshine", "Jonathan Dayton, Valerie Faris", 2006);
const eternalSunshine = new Movie(4, "Eternal Sunshine of the Spotless Mind", "Michel Gondry", 2004);
const lordOfTheRings1 = new Movie(5, "The Lord of the Rings: The Fellowship of the Ring", "Peter Jackson", 2001);
const lordOfTheRings2 = new Movie(6, "The Lord of the Rings: The Two Towers", "Peter Jackson", 2002);
const lordOfTheRings3 = new Movie(7, "The Lord of the Rings: The Return of the King", "Peter Jackson", 2003);
const memento = new Movie(8, "Memento", "Christopher Nolan", 2000);

let element = document.getElementById('number');
console.log(element);
console.log(element.value);
element = document.querySelector('#number');
console.log(element);
console.log(element.value);

let elements = document.getElementsByClassName('option');
console.log(elements.length);
elements = document.querySelectorAll('.option');
console.log(elements.length);

let elementsTh = document.getElementsByTagName('th');
elementsTh = document.querySelectorAll('th');
for (let i = 0; i < elementsTh.length; i++){
    console.log(elementsTh[i]);
    console.log(elementsTh[i].innerText);
}

let elementTh = document.querySelector('th');
console.log(elementTh);
console.log(elementTh.innerText);

//Add movies to the table

function addMovieToTable(hocijakyNazov){
    let tableBody = document.querySelector('tbody');
    let row = document.createElement('tr');
    row.innerHTML = `<td>${hocijakyNazov.id}</td><td>${hocijakyNazov.title}</td><td>${hocijakyNazov.director}</td><td>${hocijakyNazov.year}</td>`;
    tableBody.appendChild(row);
}

// Add movies to the table
addMovieToTable(requiemForADream);
addMovieToTable(donnieDarko);
addMovieToTable(littleMissSunshine);
addMovieToTable(eternalSunshine);
addMovieToTable(lordOfTheRings1);
addMovieToTable(lordOfTheRings2);
addMovieToTable(lordOfTheRings3);
addMovieToTable(memento);

function changeColor(event){
    event.preventDefault();
    let color = document.getElementById("myColor").value;
    console.log(color);
    document.body.style.background = color;
}

let toggle = document.getElementById("toggle");
let password = document.getElementById("pass");

toggle.addEventListener("click", function(event){
    event.preventDefault();
    let type2 = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type2);
    this.textContent = type2 === "password" ? "Show Password" : "Hide Password";
})