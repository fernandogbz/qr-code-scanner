const wrapper = document.querySelector(".wrapper");
form = wrapper.querySelector("form");
fileInp = form.querySelector("input");

form.addEventListener("click", () => fileInp.click());