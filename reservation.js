document.getElementById("reservationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const guests = document.getElementById("guests").value;

  if (!name || !phone || !email || !date || !time || !guests) {
    alert("Please fill in all fields.");
    return;
  }

  // You can add extra validations here (like phone number format, etc.)

  // Show success message
  document.getElementById("reservationSuccess").style.display = "block";

  // Optionally clear the form
  this.reset();
});
