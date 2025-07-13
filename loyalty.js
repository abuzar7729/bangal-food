let customer = {
  name: "Rahul Das",
  points: 720
};

function updateLoyaltyUI() {
  document.getElementById("customerName").textContent = customer.name;
  document.getElementById("points").textContent = customer.points;
  document.getElementById("membership").textContent = getMembershipLevel(customer.points);
}

function addPoints(amount) {
  customer.points += amount;
  updateLoyaltyUI();
}

function getMembershipLevel(points) {
  if (points >= 1000) return "Platinum";
  if (points >= 500) return "Gold";
  return "Silver";
}

// Initial render
updateLoyaltyUI();
