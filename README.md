# Project 2: Landing Page

## Desription

The purpose of the project is to create a navigation bar for the landing page using javascript. The navigation bar has four sections that will jump to a specific location when a section is clicked. Also, each section on the bar will be higlighted when the mouse is hovers over and will unhighlight when the cursor leaves. In addition, for each section, the list item will be highlighted when the mouse cursor is over that section. My goal was to implement all the neccessary elements using JS rather that stating them directly on the html file.

### Creating the Navigation Bar

The function **ele** will create and append a specified number of elements to the target. 

The function **navItemTextContent** adds the desired text for each indivial list item.

### Event Section 

There are two IFFE functions that contain event listeners that correspoing to the page's navigation. 

The first IFFE function is a set of click event listeners for the navigation bar that jump to the corresponding section of a list item. At the same time, once a section is cliked, the active class is removed from the current section that has the active class so that two list items wont be highlighted at the same time. The corresponding function is called **eraseAcitve**.

The second IFFE function has a mouse hover listener that hihglights the navigation bar. Also the function contains a click listener that assings an active class to the section that is clicked. 

