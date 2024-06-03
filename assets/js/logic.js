const toggleButton = document.querySelector(".toggle-mode");

document.addEventListener("DOMContentLoaded", function () {
  toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      toggleButton.textContent = "🌙";
    } else {
      toggleButton.textContent = "☀️";
    }
  });
});
