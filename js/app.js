/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
//Select sections

const navbar = document.getElementById('navbar__list');


// Create button
const button = document.createElement('button');
button.innerText = 'Create Section';

//Add the button to body
document.body.appendChild(button);

//Add the event listener to the button
button.addEventListener('click', function() {
    //Create new section
    var newSec = document.createElement(newSec);
    newSec.innerText = 'New Section';

    //Add new section to the navbar
    navbar.appendChild(newSec);
})


// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


