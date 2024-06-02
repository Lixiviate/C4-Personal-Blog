const usernameInput = document.querySelector(".input-username");
const titleInput = document.querySelector(".input-title");
const contentInput = document.querySelector(".input-content");
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

document
  .querySelector(".blog-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = {
      username: usernameInput.value,
      title: titleInput.value,
      content: contentInput.value,
    };

    localStorage.setItem("formData", JSON.stringify(formData));
    console.log(formData);
  });
