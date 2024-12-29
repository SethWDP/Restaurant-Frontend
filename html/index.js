AOS.init();

let menulist = document.getElementById("menulist");
menulist.style.maxHeight = "0px";

function toggleMenu() {
  if (menulist.style.maxHeight === "0px") {
    menulist.style.maxHeight = "600px";
  } else {
    menulist.style.maxHeight = "0px";
  }
}

const counters = document.querySelectorAll(".exp-num h2"); // Match your elements
const container = document.querySelector(".exp-num"); // Match the container

let activated = false; // Declare `activated` outside the listener

window.addEventListener("scroll", function () {
  if (
    pageYOffset > container.offsetTop - container.offsetHeight - 670 &&
    !activated
  ) {
    counters.forEach((counter) => {
      counter.innerText = "0"; // Initialize the counter

      function updateCount() {
        const target = parseInt(counter.dataset.count, 10); // Get the target value
        const current = parseInt(counter.innerText, 10); // Get the current value

        if (current < target) {
          counter.innerText = current + 1; // Increment the count
          setTimeout(updateCount, 70); // Adjust speed of the animation
        } else {
          counter.innerText = target; // Ensure it stops at the target
        }
      }

      updateCount();
    });

    activated = true; // Prevent the animation from repeating
  }
});
