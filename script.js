const wrapper = document.querySelector(".wrapper"),
form = wrapper.querySelector("form"),
fileInp = form.querySelector("input"),
infoText = form.querySelector("p"),
closeBtn = wrapper.querySelector(".close"),
copyBtn = wrapper.querySelector(".copy");

function fetchRequest(formData, file) {
  infoText.innerText = "Scanning QR Code...";
  // Sending post request to qr server api with passing
  // form data as body and getting response from it
  fetch("http://api.qrserver.com/v1/read-qr-code/", {
    method:"POST", body: formData
  }).then(res => res.json()).then(result => {
    result = result[0].symbol[0].data;
    wrapper.querySelector("textarea").innerText = result;
    form.querySelector("img").src = URL.createObjectURL(file);
    infoText.innerText = "Upload QR Code to Scan";
    wrapper.classList.add("active");
  }); 
}

fileInp.addEventListener("change", e => {
  let file = e.target.files[0]; // Getting user selected file
  if(!file) return;
  let formData = new FormData(); // Creating a new FormData object
  formData.append("file", file); // Adding selected file to formData
  fetchRequest(formData, file);
});

copyBtn.addEventListener("click", () => {
  let text = wrapper.querySelector("textarea").textContent;
  navigator.clipboard.writeText(text);
})

form.addEventListener("click", () => fileInp.click());
closeBtn.addEventListener("click", () => wrapper.classList.remove("active"));