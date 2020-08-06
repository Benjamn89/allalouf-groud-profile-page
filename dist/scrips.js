const header = () => {
  // Create counter/ preCounter for knowing which element to display
  let counter = 0;
  let preCounter = 0;
  // Create shortcuts for the slides elements
  const slides = document.querySelectorAll(".header-slides");
  // Create shortcuts for the arrow svgs
  const arrowLeft = document.querySelector(".header-arrow-left");
  const arrowRight = document.querySelector(".header-arrow-right");
  // Create function that disable the event listeners from the arrows temporary
  const temporaryDisable = () => {
    arrowLeft.classList.add("arrow-disable");
    arrowRight.classList.add("arrow-disable");
    setTimeout(() => {
      arrowLeft.classList.remove("arrow-disable");
      arrowRight.classList.remove("arrow-disable");
    }, 900);
  };
  // Set the slide left function
  const slideLeft = () => {
    slides[preCounter].classList.add("center-to-left");
    slides[counter].classList.add("right-to-center");
  };
  // Set the slide Right fucntion
  const slideRight = () => {
    slides[preCounter].classList.add("center-to-right");
    slides[counter].classList.add("left-to-center");
  };
  // Set the clear classes function
  const clearClasses = () => {
    slides[0].className = "header-slides";
    slides[1].className = "header-slides";
  };
  // Create the event listener function
  const slide = (direction) => {
    // Call the disable btns function
    temporaryDisable();
    // Detect the direction and change the counter accordingly
    direction === "+" ? counter++ : counter--;
    // Keep the counter in the range
    if (counter > 1) {
      counter = 0;
    } else if (counter < 0) {
      counter = 1;
    }
    // Clear all classes
    clearClasses();
    if (direction === "+") {
      slideLeft();
    } else {
      slideRight();
    }
    // Change the preCounter
    preCounter = counter;
    // Change the css in the dots
    changeDotsCss();
  };
  // Add event listener for the 2 btns
  arrowLeft.addEventListener("click", () => slide());
  arrowRight.addEventListener("click", () => slide("+"));

  // DOTS SECTINO
  let index;
  // Create short cut for the div (dots) element
  const el = document.querySelectorAll(".header-dots div");
  // Set function that changes the dots div classes
  const changeDotsCss = () => {
    document
      .querySelector(".header-dots-active")
      .classList.remove("header-dots-active");
    el[counter].classList.add("header-dots-active");
  };
  // Set the function to be executed when clickig on the dots
  const changeSlide = (e) => {
    // Get the index
    index = parseInt(e.target.getAttribute("index"));
    counter = index;
    // Clear Classes
    clearClasses();
    if (counter > preCounter) {
      slideRight();
    } else {
      slideLeft();
    }
    // Change the css in the dots
    changeDotsCss();
    preCounter = counter;
  };
  // Set the event listener
  for (let i = 0; i <= 1; i++) {
    el[i].addEventListener("click", changeSlide);
  }
};
header();
const navbar = () => {
  document.querySelector(".nav-hamburger").addEventListener("click", () => {
    // Create short cuts for the divs inside the hamburger (the 3 lines)
    const divs = document.querySelectorAll(".nav-hamburger > div");
    // Change elements style to rcv the X btn
    for (let i = 0; i <= 2; i++) {
      divs[i].classList.toggle("div-hamburger-click");
    }
    divs[0].classList.toggle("div-hamburger-1");
    divs[1].classList.toggle("div-hamburger-2");
    divs[2].classList.toggle("div-hamburger-3");
    // Transform the side bar to the view port
    document.querySelector(".nav-side-bar").classList.toggle("nav-side-bar-on");
  });
};
navbar();
const sideBar = () => {
  // Create shortcuts for the inside divs
  const divs = document.querySelectorAll(".expand-side-bar");
  // Create the function to expand the divs
  const expandDiv = (e) => {
    e.target.parentNode.children[1].classList.toggle("inside-side-bar-on");
    // Flip the svg
    e.target.children[0].classList.toggle("flip-svg");
  };
  // Add event listeners to those divs
  for (let i = 0; i <= 3; i++) {
    divs[i].addEventListener("click", expandDiv);
  }
};
sideBar();
