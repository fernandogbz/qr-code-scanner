const wrapper = document.querySelector(".wrapper");
form = wrapper.querySelector("form");
fileInp = form.querySelector("input");

fileInp.addEventListener("change", e => {
  let file = e.target.files[0]; // Getting user selected file
  let formData = new FormData(); // Creating a new FormData object
  console.log(file);
});

form.addEventListener("click", () => fileInp.click());