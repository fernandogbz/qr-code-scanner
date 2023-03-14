const wrapper = document.querySelector(".wrapper");
form = wrapper.querySelector("form");
fileInp = form.querySelector("input");

function fetchRequest(formData) {
  fetch("http://api.qrserver.com/v1/read-qr-code/", {
    // Sending post request to qr server api with passing
    method:"POST", body: formData
  })
}

fileInp.addEventListener("change", e => {
  let file = e.target.files[0]; // Getting user selected file
  let formData = new FormData(); // Creating a new FormData object
  formData.append("file", file); // Adding selected file to formData
  fetchRequest(formData);
});

form.addEventListener("click", () => fileInp.click());