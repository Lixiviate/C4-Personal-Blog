// Select form input elements
const usernameInput = document.querySelector(".input-username");
const titleInput = document.querySelector(".input-title");
const contentInput = document.querySelector(".input-content");

// Handle form submission to save blog post data
document
  .querySelector(".blog-form")
  .addEventListener("submit", function (event) {
    // prevent page refresh from occurring
    event.preventDefault();

    const formData = {
      username: usernameInput.value,
      title: titleInput.value,
      content: contentInput.value,
    };

    // Retrieve existing blog posts from localStorage
    let storedData = JSON.parse(localStorage.getItem("formData"));
    if (!storedData) {
      storedData = [];
    }

    // Add new blog post to the list and save back to localStorage
    storedData.push(formData);
    localStorage.setItem("formData", JSON.stringify(storedData));

    // Alert the user of successful submission and redirect to blog.html
    alert("You've Successfully Submitted Your Blog Post!");
    window.location.href = "blog.html";
  });
