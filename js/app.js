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
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= -200 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const fragment = document.createDocumentFragment();

for (let i = 1; i <= 4; i++) {
    const newElement = document.createElement('li');
    // newElement.innerHTML = '<a href="#' + i + '">Section ' + i + '</a>';
    newElement.innerText = 'Section ' + i;
    newElement.classList.add('menu__link');

    fragment.appendChild(newElement);
}

document.getElementById('navbar__list').appendChild(fragment);

// Add class 'active' to section when near top of viewport
const sections = document.querySelectorAll('section');
for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    document.addEventListener('scroll', function() {
        const sectionTitle = isInViewport(section);

        if(sectionTitle) {
            section.classList.add('your-active-class');
        }
        else {
            section.classList.remove('your-active-class');
        }
    })
}

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


