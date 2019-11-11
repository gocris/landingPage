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
 Start Helper Functions */

let eraseActive = function(target) {
  	var current = document.getElementsByClassName("active");
    // erase the current higlighted tag with active
	if (current.length > 0) {
    	current[0].className = current[0].className.replace(" active", "");
    }
	// Add the active class to the current/clicked item
    target.className += " active";     
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
let ele = function (query, element, repeat, attribute, attName) { 
    const target = document.querySelector(query);
    
    for (let i = 0; i < repeat; i++) {
        let att = document.createElement(element);
        att.setAttribute(attribute, attName);
        target.appendChild(att);
    }
  
    console.log(`${repeat} times the element: ${element} was created in ${query}`);
}

 let navItemTextCont = function(title, content1, content2, content3) {
  
  const heading = document.querySelector('h1');
  heading.textContent = title;

  const item = document.getElementsByClassName('navItem');

  item[0].textContent = heading.textContent;
  item[1].textContent = content1;
  item[2].textContent = content2;
  item[3].textContent = content3;
} 


ele('#navbar__list', 'li', 4, 'class', 'navItem');

navItemTextCont('Landing Page', 'Section 1', 'Section 2', 'Section 3');

//Begin Events

(function() { 
  const target = document.getElementsByClassName('navItem');
  
  target[0].addEventListener('click', function() {
    location.href = '#top';
    eraseActive(target[0]);
  });
  
  target[1].addEventListener('click', function() { 
    location.href = '#section1';
    eraseActive(target[1]);
  });
  
  target[2].addEventListener('click', function() { 
    location.href = '#section2';
    eraseActive(target[2]);
  });
  
  target[3].addEventListener('click', function() { 
    location.href = '#section3';
    eraseActive(target[3]);
  });
  
})();

(function() { 
    const target = document.querySelectorAll('.navItem');
    
    for (let i = 0; i < target.length; i++) {
        target[i].addEventListener('mouseenter', function() { 
            target[i].style.cssText = 'color: white; background: #19DF6F; cursor: pointer; transition: .5s';
        });
      
       document.getElementsByClassName('box')[i].addEventListener('mouseover', function() { 
           	var current = document.getElementsByClassName("active");
         // If there's no active class
    		if (current.length > 0) {
     		current[0].className = current[0].className.replace(" active", "");
            }

            // Add the active class to the current/clicked button
            target[i].className += " active";          
        });                          
   
         target[i].addEventListener('mouseleave', function() { 
            target[i].style.cssText = 'transition: 1s; color: black;';
        });
    }
})();
