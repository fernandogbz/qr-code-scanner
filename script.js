const wrapper = document.querySelector(".wrapper");
form = wrapper.querySelector("form");
fileInp = form.querySelector("input");

fileInp.addEventListener("change", e => {
  // Getting user selected file
  let file = e.target.files[0];
  console.log(file);
});

form.addEventListener("click", () => fileInp.click());