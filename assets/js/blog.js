const postContainer = document.querySelector(".blog-container");
let storedData = JSON.parse(localStorage.getItem("formData"));
if (!storedData) {
  storedData = [];
}
// Retrieve stored blog posts from localStorage
document.addEventListener("DOMContentLoaded", function () {
  // Loop through each stored blog post and display it in the browser
  for (let i = 0; i < storedData.length; i++) {
    const post = storedData[i];
    const postDiv = document.createElement("div");

    postDiv.classList.add("post");

    const postContent = `<h2>${post.title}</h2>
    <h3>${post.username}</h3>
    <p>${post.content}</p>`;

    postDiv.innerHTML = postContent;
    postContainer.appendChild(postDiv);
  }
});
