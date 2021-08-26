  
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
const navigationbar = document.getElementById("navbar__list")
// Global Variable for each section
const sections = document.querySelectorAll("section")


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

const orderlist = document.createElement("li");

function NavBuilder() {
    for (const section of sections) {
        const selectorId = section.id;
        const selectordata = section.dataset.nav;
        orderlist.innerHTML = `<a href="${selectorId}">${selectordata}</a>`

    };
    navigationbar.appendChild(orderlist);
};

NavBuilder()

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