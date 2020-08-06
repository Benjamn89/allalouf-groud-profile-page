export const sideBar = () => {
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
