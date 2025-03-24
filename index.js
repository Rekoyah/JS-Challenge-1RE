window.addEventListener("load", function() {
    let person = prompt("Please enter your name")
    if (person != null) {
        localStorage.setItem("name", person);
    }
});

let names = [];
let numberOfNames = 7;

window.addEventListener("load", function() { 
    for (let i = 0; i < numberOfNames; i++) {
    let name = prompt(`Enter name ${i + 1}`)
    if (name !== null) {
        names.push(name);
        console.log(names);
    }

}});

