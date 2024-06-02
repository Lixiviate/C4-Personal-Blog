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

    localStorage.setItem("formData", JSON.stringify(formData));
    console.log(formData);
  });
