const hamburger = document.querySelector(".hamburger"); // safer selector
const nav = document.querySelector("nav");

  if (hamburger && nav) {
    const navLinks = nav.querySelector("ul"); // always find the <ul> inside this nav

    hamburger.addEventListener("click", () => {
      if (navLinks) {
        navLinks.classList.toggle("active"); // show/hide menu
      }
      hamburger.classList.toggle("active"); // animate hamburger to X
    });
  }