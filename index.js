window.addEventListener("load", function() {
    let person = prompt("Please enter your name")
    if (person != null) {
        localStorage.setItem(person)
    }
});
