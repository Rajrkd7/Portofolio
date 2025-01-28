/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    // Log the form data for debugging
    console.log("Submitting form...");

    emailjs
        .sendForm('service_y2p9wcg', 'template_ptqfisd', '#contact-form', 'eBGL-OVSpoS8r8aNy')
        .then(
            () => {
                // Success: Show pop-up alert
                alert('Message sent successfully ✅');
                
                // Update UI with success message
                contactMessage.textContent = 'Message sent successfully ✅';
                contactMessage.style.color = 'green';

                // Clear the message after 3 seconds
                setTimeout(() => {
                    contactMessage.textContent = '';
                }, 3000);

                // Reset the form
                contactForm.reset();
            },
            (error) => {
                // Log the error details
                console.error('EmailJS Error:', error);

                // Show pop-up alert for failure
                alert('Message failed to send. Please try again.');

                // Update UI with error message
                contactMessage.textContent = 'Message failed to send. Please try again.';
                contactMessage.style.color = 'red';
            }
        )
        .catch((error) => {
            // Log unexpected errors
            console.error('Unexpected Error:', error);
            alert('An unexpected error occurred. Please try again.');
        });
};

// Add an event listener for the form submission
contactForm.addEventListener('submit', sendEmail);


// Add an event listener for the form submission
contactForm.addEventListener('submit', sendEmail);


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
