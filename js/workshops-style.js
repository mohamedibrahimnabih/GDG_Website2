// Get all link elements
const workshopLink = document.getElementById("workshopLink");
const detailsLink = document.getElementById("detailsLink");
const highlightsLink = document.getElementById("highlightsLink");
const learningLink = document.getElementById("learningLink");

// Get all content windows
const workshopWindow = document.getElementById("workshopWindow");
const detailsWindow = document.getElementById("detailsWindow");
const highlightsWindow = document.getElementById("highlightsWindow");
const learningWindow = document.getElementById("learningWindow");

const showWindow = (windowToShow) => {
  const allWindows = [workshopWindow, detailsWindow, highlightsWindow, learningWindow];
  allWindows.forEach(win => {
    if (win) {
      win.style.display = (win === windowToShow) ? "block" : "none";
    }
  });
};

if (workshopLink && workshopWindow) {
  workshopLink.addEventListener("click", (event) => {
    event.preventDefault();
    showWindow(workshopWindow);
  });
}

if (detailsLink && detailsWindow) {
  detailsLink.addEventListener("click", (event) => {
    event.preventDefault();
    showWindow(detailsWindow);
  });
}

if (highlightsLink && highlightsWindow) {
  highlightsLink.addEventListener("click", (event) => {
    event.preventDefault();
    showWindow(highlightsWindow);
  });
}

if (learningLink && learningWindow) {
  learningLink.addEventListener("click", (event) => {
    event.preventDefault();
    showWindow(learningWindow);
  });
}

// Show registration form when button is clicked
const registerBtn = document.querySelector(".register-btn");
const regFormBox = document.getElementById("regFormBox");

if (registerBtn && regFormBox) {
  registerBtn.addEventListener("click", function(event) {
    event.preventDefault();
    regFormBox.style.display = "flex";
  });
}

function toggleMenu() {
  const nav = document.querySelector('.nav-links');
  nav.classList.toggle('active');
}
