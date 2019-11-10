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
let ele = function (query, element, repeat, attribute, attName) { 
    const target = document.querySelector(query);
    
    for (let i = 0; i < repeat; i++) {
        let att = document.createElement(element);
        att.setAttribute(attribute, attName);
        //att.textContent = `Section ${i}`;
        target.appendChild(att);
    }
  
    console.log(`${repeat} times the element: ${element} was created in ${query}`);
}

/*
let secondEle = function() {
  	for(let i = 0; i < 4; i++) {
  		const target = document.getElementsByClassName('navItem')[i];
        let idTag = `#section${i}`;
      
    	for (let j = 0; j < 1; j++) {
          let att = document.createElement('a');
          att.setAttribute('href', idTag);
          att.textContent = `Section ${i}`;
          target.appendChild(att);
      }
  
    }
}
*/
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

ele('#navbar__list', 'li', 4, 'class', 'navItem');
//secondEle();

(function(title, content1, content2, content3) {
  
  const heading = document.querySelector('h1');
  heading.textContent = title;

  const item = document.getElementsByClassName('navItem');

  item[0].textContent = heading.textContent;
  item[1].textContent = content1;
  item[2].textContent = content2;
  item[3].textContent = content3;

})('Landing Page', 'Section 1', 'Section 2', 'Section 3'); 


(function() { 
  const target = document.getElementsByClassName('navItem');
  
  target[1].addEventListener('click', function() { 
    window.scrollTo(location.href = '#section1');
  });
  
  target[2].addEventListener('click', function() { 
    window.scrollTo(location.href = '#section2');
  });
  
  target[3].addEventListener('click', function() { 
    window.scrollTo(location.href = '#section3');
  });
  
  
})();


(function() { 
    const target = document.querySelectorAll('.navItem');
    
    for (let i = 0; i < target.length; i++) {
        target[i].addEventListener('mouseenter', function() { 
            target[i].style.cssText = 'color: white; background: #19DF6F; cursor: pointer; transition: 1s';
        });
        
         target[i].addEventListener('mouseleave', function() { 
            target[i].style.cssText = 'transition: 1s; color: black;';
        });
    }
})();





/*
(function() { 
  const target = document.getElementsByClass('navItem')[0];
  
})();
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
