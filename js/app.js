  
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

//Variable to append html code
let orderlist = "";

function NavBuilder() {
    for (const section of sections) {

        //Targeting ids and data-nav
        const selectorId = section.id;
        const selectordata = section.dataset.nav;

        //Add html code and id and section name every loop cycle
        orderlist += `<li><a class ="" href="#${selectorId}">${selectordata}</a></li>`;

    };
    //Append all elements in naviagionbar
    navigationbar.innerHTML = orderlist;
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