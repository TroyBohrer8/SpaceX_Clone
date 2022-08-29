const btn = document.getElementById("menu-btn");
const overlay = document.getElementById("overlay");
const menu = document.getElementById("mobile-menu");
const counter = document.querySelectorAll(".counter");
let resetNumber = false;

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  overlay.classList.toggle("overlay-show");
  document.body.classList.toggle("stop-scrolling");
  menu.classList.toggle("show-menu");
});

document.addEventListener("scroll", () => {
  const scroll = window.scrollY;

  if (scroll > 100 && !resetNumber) {
    countUp();
    resetNumber = true;
  } else if (scroll < 100 && resetNumber) {
    reset();
    resetNumber = false;
  }
});

function countUp() {
  counter.forEach((count) => {
    count.innerText = "0";

    const updateCounter = () => {
      // Get count target
      const target = count.getAttribute("data-target");
      // Get current counter value
      const n = +count.innerText;
      // Create increment
      const increment = target / 100;

      // If counter is less than target, add increment
      if (n < target) {
        // Round up and set counter value
        count.innerText = `${Math.ceil(n + increment)}`;
        setTimeout(updateCounter, 75);
      } else {
        count.innerText = target;
      }
    };

    updateCounter();
  });
}

function reset() {
  counter.forEach((count) => (count.innerText = "0"));
}
