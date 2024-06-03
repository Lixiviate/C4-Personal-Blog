const usernameInput = document.querySelector(".input-username");
const titleInput = document.querySelector(".input-title");
const contentInput = document.querySelector(".input-content");

document
  .querySelector(".blog-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
      username: usernameInput.value,
      title: titleInput.value,
      content: contentInput.value,
    };

    let storedData = JSON.parse(localStorage.getItem("formData"));
    if (!storedData) {
      storedData = [];
    }

    storedData.push(formData);

    localStorage.setItem("formData", JSON.stringify(storedData));

    alert("You've Successfully Submitted Your Blog Post!");

    window.location.href = "blog.html";
  });
