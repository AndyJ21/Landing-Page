  
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
// Global Variable for Navigation
const navigationbar = document.getElementById("navbar__list");
// Global Variable for each section
const sections = document.querySelectorAll("section");


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

// build the nav

//Variable to append html code
let orderlist = "";

function NavBuilder() {
    for (const section of sections) {

        //Targeting ids and data-nav from section
        const selectorId = section.id;
        const selectordata = section.dataset.nav;

        //Add html code, class and section name to every loop cycle
        orderlist += `<li><a class="menu__link" href="#${selectorId}">${selectordata}</a></li>`;

    };
    //Append all elements in navigation bar
    navigationbar.innerHTML = orderlist;
}

NavBuilder();

// Add class 'active' to section when near top of viewport

 // Add class 'active' to section when near top of viewport 
// Get the Top of the section
function targetActive(section){
    return section.getBoundingClientRect().top;
}

// Remove active class for other sections
function removeActive(section){
    return section.classList.remove("your-active-class");
}

// Add active class to the current section
function addActive(condition, section){
    if(condition){
    section.classList.add("your-active-class");
    };
}

//Implement all functions in adding or removing active class
function activeSection(){
    for(const section of sections){
        const targetactive = targetActive(section);
        const viewport =  targetactive > -200 && targetactive < 200;

        removeActive(section);

        addActive(viewport, section);

    };
}

//Add envent listener to window 
window.addEventListener('scroll', activeSection);



// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active