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

// build the nav
let ele = function createEle(query, element, repeat) { 
    const target = document.querySelector(query);
    
    for (let i = 0; i < repeat; i++) {
        let idTag = `Section ${i + 1}`;
        
        let att = document.createElement(element);
        att.setAttribute('id', idTag);
        att.setAttribute('class','navItem');
        att.textContent = idTag;
        target.appendChild(att);
    }
    
    console.log(`${repeat} times the element: ${element} was created in ${query}`);
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/
ele('navbar__list', 'li', 4);

(function() { 
    const target = document.querySelectorAll('.navItem');
    
    for (let i = 0; i < target.length; i++) {
        target[i].addEventListener('mouseenter', function() { 
            target[i].style.cssText = 'color: white; background: #19DF6F; border: solid #00A046 1px';
        });
        
         target[i].addEventListener('mouseleave', function() { 
            target[i].style.cssText = 'color: black';
        });
    }
))();

// Build menu 

// Scroll to section on link click

// Set sections as active
