export const navbar = () => {
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
