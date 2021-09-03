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
    listItem.innerHTML = `<a class='menu__link' data-link='${sectionLink}'>${sectionName}</a>`;

    navbar.appendChild(listItem);
    }
}
liCreator();

// Scroll to section on link click


//Old approach - event listener for each item
//const links = document.querySelectorAll('.menu__link');
// links.forEach((item) => {
//    item.addEventListener("click", () => {
//        console.log(item)
//    })
//})

//Event Delegation

//const parent = document.getElementById("navbar__list");

//parent.addEventListener('click', event => {
//    if (event.target.className === 'menu__link') {
//        console.log(event.target.innerHTML);
//   }
//});

const parent = document.getElementById("navbar__list");

parent.addEventListener('click', event => {
    if (event.target.className === 'menu__link') {
        let el = document.getElementById((newSecLink));
        el.scrollIntoView({behavior: 'smooth'});
   }
});




// Create button
const button = document.createElement('button');
button.innerText = 'Create Section';

//Add the button to body
document.body.appendChild(button);

//Add the event listener to the button
button.addEventListener('click', function() {
    //Create new section, div, and paragraph with text
    const newSec = document.createElement('section');
    const newDiv = document.createElement('div');
    const newTitle = document.createElement('h2');

    //Give an id and data-nav to the new section
    newSec.setAttribute('id', 'section'+(numberOfSec+1));
    newSec.setAttribute('data-nav', 'Section'+' '+(numberOfSec+1));

    //Add title with increasing number
    newTitle.innerText = ' Section '+ (numberOfSec + 1) + ' ';
    numberOfSec += 1 ;

    const newPar = document.createElement('p');
    newPar.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.';
   
    //Add new div and paragraph
    newDiv.appendChild(newTitle);
    newDiv.appendChild(newPar);
    newSec.appendChild(newDiv);

    // Style the new div
    newDiv.classList.add('landing__container');
   
    //Add the new section to the page
    const main = document.querySelector('main');
    main.appendChild(newSec);

    //Create new section link on navbar
    newSecName = newSec.getAttribute('data-nav');
    newSecLink = newSec.getAttribute('id');
    listItem = document.createElement('li');
    listItem.innerHTML = `<a class='menu__link' data-link='${newSecLink}'>${newSecName}</a>`;
    navbar.appendChild(listItem);
})
 


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event





/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 



// Set sections as active


