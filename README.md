# JS-Challenge-1
End of Module Challenge

1. Create a simple page (only HTML and JS files required)

This page will be a random name picker.

When the page opens, the user should be asked for their name via a prompt.
Store the users name in an object and save it in localstorage.

2. Page Load and Initial User Input

The user should then be prompted to enter 7 names.

Each name, when entered, should be added to an array.

After the array has 7 names, a random number should be created and stored in a variable.
The number must be an integer (a whole non-decimal number) with a value that is 0, 1, 2, 3, 4, 5, or 6.

After that, draw the 7 names on the screen alongside an input element that only let's the user type numbers and a submit button.

3. Submit Functionality

When the submit button is pressed, the page should not refresh.

If the number matches your random number, show an alert box with a congratulatory message.
If this was their first guess, store the number 1 as a variable on your user object in localStorage that will track how many 1st guesses were correct.
If this variable already exists, add 1 to it.

Otherwise, show an alert box that tells them to guess again.
Create another variable on your user object in localstorage to keep track of how many wrong guesses the user has entered. 
If this was their first wrong guess, set the variable to 1.
If the variable is already in localstorage add 1 to it.

An example for your user object:


    {

        name: DJ,

        first: 99,
        
        wrongs: 1

    }

## Technical terms used in this assignment:

### Alert

### Prompt

### Loops

### LocalStorage

### JSON

### variables

### forms

### eventListener

### submit event

### if statement

### arrays

### Math.random

### Math.round

### Math.floor
