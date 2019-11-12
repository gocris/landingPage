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

//Function theat deletes the current tag holding the class: active
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

//function that creates element(s) to the selected target
let ele = function (query, element, repeat, attribute, attName) { 
	const target = document.querySelector(query);
    
    	for (let i = 0; i < repeat; i++) {
        	let att = document.createElement(element);
        	att.setAttribute(attribute, attName);
        	target.appendChild(att);
   	}
  
    	console.log(`${repeat} times the element: ${element} was created in ${query}`);
}

//Function that inputs the textcontent into the navigation bar individual sections
let navItemTextCont = function(title, content1, content2, content3) {
  
	const heading = document.querySelector('h1');
	heading.textContent = title;

	const item = document.getElementsByClassName('navItem');

	item[0].textContent = heading.textContent;
	item[1].textContent = content1;
	item[2].textContent = content2;
	item[3].textContent = content3;
} 

//create 4 list items for the navigation bar
ele('#navbar__list', 'li', 4, 'class', 'navItem');

//Inpute the textcontent for the list items
navItemTextCont('Landing Page', 'Section 1', 'Section 2', 'Section 3');

//Begin Events
//IFFE that scrolls to the sections to the corresponding navigation bar section
(function() { 
	const target = document.getElementsByClassName('navItem'); //the ul is the target
  
  	target[0].addEventListener('click', function() {
   		location.href = '#top'; //when the first li is clicked, the page scrolls to the top of section
    		eraseActive(target[0]); //when clicked, the target gets assigned class: active
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

//Event Listerner IFFE 
//Mouse Over and Leave from the navigation Bar
(function() { 
    	const target = document.querySelectorAll('.navItem');
    
    	for (let i = 0; i < target.length; i++) {
        	target[i].addEventListener('mouseenter', function() { 
            	target[i].style.cssText = 'color: white; background: #19DF6F; cursor: pointer; transition: .5s';
        });
      	//Sets an active class for each section to highlight the nav bar
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
