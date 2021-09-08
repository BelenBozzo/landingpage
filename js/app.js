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

//Select sections
const sections = Array.from(document.querySelectorAll('section'));
let numberOfSec = sections.length;

//Select navigation ul
const navbar = document.getElementById('navbar__list');

//Create li (links on navbar) from the already existent sections
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


// Create button
const button = document.createElement('button');
button.innerText = 'Create Section';

//Add the button to body
document.body.appendChild(button);


function sectionCreator() {
    //Create new section by cloning section 1
    const copySec = document.querySelector('#section1');
    const newSec = copySec.cloneNode(true);
    

    //Give an id and data-nav to the new section
    newSec.setAttribute('id','section'+ (numberOfSec + 1));
    newSec.setAttribute('class', '');
    newSec.setAttribute('data-nav', 'Section'+' '+(numberOfSec+1));
    numberOfSec += 1;

    //Give appropiate title to the new section
    const clonedDiv = newSec.children[0]; 
    const clonedTitle = clonedDiv.children[0];
    const newTitle = newSec.getAttribute('data-nav');
    clonedTitle.innerHTML = newTitle;

    //Add the new section to the page
    const main = document.querySelector('main');
    main.appendChild(newSec);

    //Create new section link on navbar
    sectionName = newSec.getAttribute('data-nav');
    sectionLink = newSec.getAttribute('id');
    listItem = document.createElement('li');
    listItem.innerHTML = `<a class='menu__link' data-link='${sectionLink}'>${sectionName}</a>`;
    navbar.appendChild(listItem);




     //OLD CODE FOR CREATING THE NEW SECTION

     // const newSec = document.createElement('section');
      //const newDiv = document.createElement('div');
      //const newTitle = document.createElement('h2');
  
      //Give an id and data-nav to the new section
     // newSec.setAttribute('id', 'section'+(numberOfSec+1));
      
      //Add title with increasing number
     // newTitle.innerText = ' Section '+ (numberOfSec + 1) + ' ';
     // numberOfSec += 1 ;
  
      //const newPar = document.createElement('p');
     // newPar.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.';
     
      //Add new div and paragraph
     // newDiv.appendChild(newTitle);
     // newDiv.appendChild(newPar);
     // newSec.appendChild(newDiv);
  
      // Style the new div
      //newDiv.classList.add('landing__container');
     
       //Create new section link on navbar
      //newSecName = newSec.getAttribute('data-nav');
      //newSecLink = newSec.getAttribute('id');
      //listItem = document.createElement('li');
     // listItem.innerHTML = `<a class='menu__link' data-link='${newSecLink}'>${newSecName}</a>`;
     // navbar.appendChild(listItem);
  
      

}

//Add the event listener to the button
button.addEventListener('click', sectionCreator);


//Add functionality to navbar links
const parent = document.getElementById("navbar__list");

parent.addEventListener('click', event => {
    if (event.target.className === 'menu__link') {
        let el = document.getElementById((sectionLink)); // Resolver :Como linkear los id de las secciones y los link?
        el.scrollIntoView({behavior: 'smooth'}); //Scroll funciona
   }
});





 

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event





/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 



// Set sections as active


