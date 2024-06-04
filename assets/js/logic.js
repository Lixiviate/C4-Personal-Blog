const toggleButton = document.querySelector(".toggle-mode");

// Add event listener to run when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Add functionality to toggle between dark and light modes
  toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      toggleButton.textContent = "🌙";
    } else {
      toggleButton.textContent = "☀️";
    }
  });
});
