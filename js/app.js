/** 
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
*/

//Select sections
let sections = Array.from(document.querySelectorAll('section'));
let numberOfSec = sections.length;

//Select navigation ul
const navbar = document.getElementById('navbar__list');

function liCreator(){ 
    //Select the name and the link from data type and id
    let sectionName = section.getAttribute('data-nav');
    let sectionLink = section.getAttribute('id');

    let listItem = document.createElement('li');
    listItem.innerHTML = `<a class='menu__link' data-link='${sectionLink}'>${sectionName}</a>`;
    navbar.appendChild(listItem);
}

function buildNav(){
    for (section of sections) {
        liCreator();
    }
}
buildNav();


// Create button
const button = document.createElement('button');
button.innerText = 'Create Section';
button.setAttribute('id', 'newSecButton');

//Add the button to body
document.body.appendChild(button);

//Function that creates sections (for the button)
function sectionCreator() {
   
    //Create new section by cloning section 1
    const copySec = document.querySelector('#section1');
    let section = copySec.cloneNode(true);

    //Add new section to array
    sections.push(section);
    
    //Give an id and data-nav to the new section
    section.setAttribute('id','section'+ (numberOfSec + 1));
    section.setAttribute('class', '');
    section.setAttribute('data-nav', 'Section'+' '+(numberOfSec+1));
    numberOfSec += 1;

    //Give appropiate title to the new section
    const clonedDiv = section.children[0]; 
    const clonedTitle = clonedDiv.children[0];
    const newTitle = section.getAttribute('data-nav');
    clonedTitle.innerHTML = newTitle;

    //Add the new section to the page
    const main = document.querySelector('main');
    main.appendChild(section);

    //Add the links on navbar
    function addNewLinks(){
        let sectionName = section.getAttribute('data-nav');
        let sectionLink = section.getAttribute('id');
        var listItem = document.createElement('li');
        listItem.innerHTML = `<a class='menu__link' data-link='${sectionLink}'>${sectionName}</a>`;
        navbar.appendChild(listItem);
    }
    addNewLinks();

}

//Add the event listener to the button
button.addEventListener('click', sectionCreator);


//Add functionality to navbar links (event delegation: works with future  created elements)
const parent = document.getElementById("navbar__list");
parent.addEventListener('click', event => {
    if (event.target.className === 'menu__link') {
        let navBarLink = event.target.getAttribute('data-link');
        for (section of sections){
            let sectionLink = section.getAttribute('id');
            if (sectionLink === navBarLink){
                let el = document.getElementById((sectionLink));
                el.scrollIntoView({behavior: 'smooth'});
            }
        }
   }
});

//Add functionality to scroll to top button
//Get the button:
topButton = document.getElementById("topButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTo({
      top: 0,
      behavior: 'smooth'
  }) 
}


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event





/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 



// Set sections as active
