// export const dots = () => {
//   let index;
//   // Create short cut for the div (dots) element
//   const el = document.querySelectorAll(".header-dots div");
//   // Set function that changes the dots div classes
//   const changeDotsCss = () => {
//       document
//       .querySelector(".header-dots-active")
//       .classList.remove("header-dots-active");
//       el[index].classList.add("header-dots-active");
//     };
//     // Set the function to be executed when clickig on the dots
//   const changeSlide = (e) => {
//     // Get the index
//     index = parseInt(e.target.getAttribute("index"));
//     counter = index
//     if (counter > preCounter) {
//         slideRight()
//     } else {
//         slideLeft()
//     }
//     // Change the css in the dots
//     changeDotsCss();
//    preCounter = counter
//   };
//   // Set the event listener
//   for (let i = 0; i <= 1; i++) {
//     el[i].addEventListener("click", changeSlide);
//   }
// };
