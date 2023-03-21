const wrapper = document.querySelector(".wrapper");
form = wrapper.querySelector("form");
fileInp = form.querySelector("input");

function fetchRequest(formData) {
  // Sending post request to qr server api with passing
  // form data as body and getting response from it
  fetch("http://api.qrserver.com/v1/read-qr-code/", {
    method:"POST", body: formData
  }).then(res => res.json()).then(result => {
    wrapper.classList.add("active");
  console.log(result); 
  }); 
}

fileInp.addEventListener("change", e => {
  let file = e.target.files[0]; // Getting user selected file
  let formData = new FormData(); // Creating a new FormData object
  formData.append("file", file); // Adding selected file to formData
  fetchRequest(formData);
});

form.addEventListener("click", () => fileInp.click());