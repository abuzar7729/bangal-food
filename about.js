// Scroll to top smoothly when page loads
window.onload = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Show an alert when user clicks contact number
document.getElementById("contactNumber").addEventListener("click", function (event) {
  event.preventDefault();
  alert("You can reach us at: +91-9876543210");
});

// Optional: Button that initiates a call (on mobile devices)
function callNow() {
  window.location.href = "tel:+919876543210";
}

