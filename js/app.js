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
const sections = Array.from(document.querySelectorAll('section'));
let numberOfSec = sections.length;

//Select navigation ul
const navbar = document.getElementById('navbar__list');

//Create li
function liCreator() {
    for (section of sections) {
    //Select the name and the link from data type and id
    sectionName = section.getAttribute('data-nav');
    sectionLink = section.getAttribute('id');

    listItem = document.createElement('li');
    listItem.innerHTML = `<a class='menu__link' href='#${sectionLink}'>${sectionName}</a>`;

    navbar.appendChild(listItem);
    }
}
liCreator();

// Create button
const button = document.createElement('button');
button.innerText = 'Create Section';

//Add the button to body
document.body.appendChild(button);

//Add the event listener to the button
button.addEventListener('click', function() {
    //Create new section, div, and paragraph with text
    var newSec = document.createElement('section');
    var newDiv = document.createElement('div');
    var newTitle = document.createElement('h2');

    //Give an id and data-nav to the new section
    newSec.setAttribute('id', 'section'+(numberOfSec+1));
    newSec.setAttribute('data-nav', 'Section'+' '+(numberOfSec+1));

    //Add title with increasing number
    newTitle.innerText = ' Section '+ (numberOfSec + 1) + ' ';
    numberOfSec += 1 ;

    var newPar = document.createElement('p');
    newPar.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.';
   
    //Add new section, div and paragraph
    newDiv.appendChild(newTitle);
    newDiv.appendChild(newPar);
    newSec.appendChild(newDiv);

    // Style the new section
    newDiv.classList.add('landing__container');
   
    //Add the new section to the page
    var main = document.querySelector('main');
    main.appendChild(newSec);

    //Create new section link on navbar
    listItem = document.createElement('li');
    listItem.innerHTML = `<a class='menu__link' href='#${sectionLink}'>${newTitle.innerText}</a>`;

    navbar.appendChild(listItem);

    
  

    //Add new section to the navbar
    navbar.appendChild(newSecLink);


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


