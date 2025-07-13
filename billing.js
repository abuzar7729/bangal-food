let invoiceItems = [];

function loadFromStorage() {
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    invoiceItems = JSON.parse(storedCart);
  }
}

function renderInvoice() {
  const body = document.getElementById("invoiceBody");
  body.innerHTML = "";
  let subtotal = 0;

  invoiceItems.forEach(item => {
    const total = item.qty * item.price;
    subtotal += total;

    const row = `
      <tr>
        <td>${item.name}</td>
        <td>${item.qty}</td>
        <td>₹${item.price}</td>
        <td>₹${total}</td>
      </tr>
    `;
    body.innerHTML += row;
  });

  const tax = subtotal * 0.05;
  const grandTotal = subtotal + tax;

  document.getElementById("subtotal").textContent = `₹${subtotal.toFixed(2)}`;
  document.getElementById("tax").textContent = `₹${tax.toFixed(2)}`;
  document.getElementById("total").textContent = `₹${grandTotal.toFixed(2)}`;
}

document.getElementById("paymentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const cardName = document.getElementById("cardName").value.trim();
  const email = document.getElementById("email").value.trim();
  const cardNumber = document.getElementById("cardNumber").value.trim();
  const expiry = document.getElementById("expiry").value.trim();
  const cvv = document.getElementById("cvv").value.trim();

  if (!cardName || !cardNumber || !expiry || !cvv || !email) {
    alert("Please fill all payment fields!");
    return;
  }

  if (cardNumber.length < 12 || isNaN(cardNumber)) {
    alert("Invalid card number.");
    return;
  }

  const totalAmount = document.getElementById("total").textContent;

  // ✅ Show success message
  document.getElementById("paymentSuccess").style.display = "block";

  // ✅ Send email via EmailJS
  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    to_email: email,
    user_name: cardName,
    invoice_items: invoiceItems.map(item => `${item.name} (x${item.qty}) - ₹${item.qty * item.price}`).join("\n"),
    total_amount: totalAmount
  })
  .then(function (response) {
    console.log("Email sent successfully!", response.status);
  }, function (error) {
    console.error("Email failed to send", error);
  });

  // ✅ Clear cart data
  localStorage.removeItem("cart");

  // ✅ Reset form and invoice
  this.reset();
  invoiceItems = [];
  renderInvoice();
});

loadFromStorage();
renderInvoice();
