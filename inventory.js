let inventory = [];

function renderInventory() {
  const table = document.getElementById("inventoryTable");
  table.innerHTML = "";

  inventory.forEach((item, index) => {
    const row = `
      <tr>
        <td>${item.name}</td>
        <td>${item.qty}</td>
        <td>${item.category}</td>
        <td>
          <button class="edit" onclick="editItem(${index})">Edit</button>
          <button onclick="deleteItem(${index})">Delete</button>
        </td>
      </tr>
    `;
    table.innerHTML += row;
  });
}

document.getElementById("inventoryForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const name = document.getElementById("itemName").value.trim();
  const qty = parseInt(document.getElementById("itemQty").value);
  const category = document.getElementById("itemCategory").value.trim();

  if (!name || isNaN(qty) || !category) {
    alert("Please fill all fields correctly.");
    return;
  }

  inventory.push({ name, qty, category });
  this.reset();
  renderInventory();
});

function deleteItem(index) {
  if (confirm("Are you sure you want to delete this item?")) {
    inventory.splice(index, 1);
    renderInventory();
  }
}

function editItem(index) {
  const item = inventory[index];
  const newName = prompt("Edit Item Name:", item.name);
  const newQty = prompt("Edit Quantity:", item.qty);
  const newCat = prompt("Edit Category:", item.category);

  if (newName && newQty && newCat && !isNaN(newQty)) {
    inventory[index] = {
      name: newName.trim(),
      qty: parseInt(newQty),
      category: newCat.trim()
    };
    renderInventory();
  } else {
    alert("Invalid input. Edit cancelled.");
  }
}

renderInventory();
