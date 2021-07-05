$(document).ready(function (){
  $('.carousel-2').owlCarousel({
    margin: 10,
    loop: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 4,
        nav: false,
      },
      550: {
        items: 5,
        nav: false,
      },
      650: {
        items: 6,
        nav: false,
      },
      800: {
        items: 7,
        nav: false,
      },
      900: {
        items: 8,
        nav: false,
      },
      1000: {
        items: 9,
        nav: false,
      },
      1100: {
        items: 10,
        nav: false,
      },
    },
  });
});

    const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function (){
  links.classList.toggle('show-links');
});

const questions = document.querySelectorAll(".question");


// traversing the dom

const btns = document.querySelectorAll(".question-btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    // console.log(e.currentTarget);
    const question = e.currentTarget.parentElement.parentElement;

    question.classList.toggle("show-text");
  });
});

