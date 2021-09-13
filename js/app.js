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

// Check if the element is within the viewport
// Returns true if it is, false otherwise
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
function buildNav () {
    const fragment = document.createDocumentFragment();
    const section_num = document.getElementsByClassName('landing__container');

    for (let i = 1; i <= section_num.length; i++) {
        const newElement = document.createElement('li');
        // newElement.innerHTML = '<a href="#' + i + '">Section ' + i + '</a>';
        newElement.innerText = 'Section ' + i;
        newElement.classList.add('menu__link');
        newElement.classList.add('scroll_to');
        fragment.appendChild(newElement);
    }
    
    document.getElementById('navbar__list').appendChild(fragment);
}



// Add class 'active' to section when near top of viewport
function addActiveClass(selector) {
    const sections = document.querySelectorAll(selector);
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
}



// Scroll to anchor ID using scrollTO event
function scrollToSection() {
    const anchors = document.getElementsByClassName('scroll_to');

    for (let i = 1; i <= anchors.length; i++) {
        let anchor = anchors[i-1];
        
        anchor.addEventListener('click', function() {
            const section = document.getElementById('section' + i);
            section.scrollIntoView();
        })
    }
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNav();

// Scroll to section on link click
addActiveClass('section');

// Set sections as active
scrollToSection();
