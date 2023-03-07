// Select the button element with the ID 'btnHamburger' and assign it to the variable btnHamburger
const btnHamburger = document.querySelector('#btnHamburger');

// Select the body element and assign it to the variable body
const body = document.querySelector('body');

// Select the element with the class 'header' and assign it to the variable header
const header = document.querySelector('.header');

// Select the element with the class 'overlay' and assign it to the variable overlay
const overlay = document.querySelector('.overlay');

// Select all elements with the class 'has-fade' and assign them to the variable fadeElems
const fadeElems = document.querySelectorAll('.has-fade');


// Add a click event listener to the btnHamburger element, which triggers a function when the button is clicked
btnHamburger.addEventListener('click', function(){

  // Log a message to the console when the hamburger button is clicked
  console.log('click hamburger');

  // Check if the header element contains the class 'open', which indicates the hamburger menu is currently open
  if(header.classList.contains('open')){

    // If the hamburger menu is open, remove the 'noscroll' class from the body element to allow scrolling, remove the 'open' class from the header element to close the menu, and apply the 'fade-out' class to all elements with the class 'has-fade' to fade them out
    body.classList.remove('noscroll');
    header.classList.remove('open');    
    fadeElems.forEach(function(element){
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
    
  }
  else {

    // If the hamburger menu is closed, add the 'noscroll' class to the body element to prevent scrolling, add the 'open' class to the header element to open the menu, and apply the 'fade-in' class to all elements with the class 'has-fade' to fade them in
    body.classList.add('noscroll');
    header.classList.add('open');
    fadeElems.forEach(function(element){
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });

  }  
});
