// Sample menu items (can be expanded or loaded dynamically)
const menuItems = [
  {
    id: 1,
    name: "Shorshe Ilish",
    price: 320,
    description: "Traditional mustard Hilsa fish curry",
    image: "images/ilish.jpg",
  },
  {
    id: 2,
    name: "Macher Jhol",
    price: 250,
    description: "Spicy fish curry with potatoes",
    image: "images/macher_jhol.jpg",
  },
  {
    id: 3,
    name: "Aloo Posto",
    price: 150,
    description: "Potato cooked in poppy seed paste",
    image: "images/aloo_posto.jpg",
  },
  {
    id: 4,
    name: "Mishti Doi",
    price: 80,
    description: "Sweetened fermented yogurt",
    image: "images/mishti_doi.jpg",
  },
{ id: 5,
    name: "Chingri Malai Curry",  
    price: 400,
    description: "Prawn cooked in coconut milk", 
    image: "images/chingri_malai_curry.jpg",
  },  
  { id: 6,
    name: "Luchi Aloo Dum",  
    price: 200,
    description: "Fried flatbread with spiced potatoes", 
    image: "images/luchi_aloo_dum.jpg",
  },
  { id: 7,
    name: "Prawn Pulao", 
    price: 350,
    description: "Fragrant rice with prawns and spices",
    image: "images/prawn_pulao.jpg",
  },
  { id: 8,
    name: "Cholar Dal", 
    price: 120,
    description: "Bengal gram lentils cooked with coconut",
    image: "images/cholar_dal.jpg",
  },
  { id: 9,
    name: "Sandesh",
    price: 60,
    description: "Soft Bengali sweet made from fresh cheese",
    image: "images/Sandesh.jpg",  
  },
  { id: 10,
    name: "Pati Shapta",    
    price: 100,
    description: "Thin crepes filled with coconut and khoya",
    image: "images/pati_shapta.jpg",  
  },
  { id: 11,
    name: "Bhetki Paturi",  
    price: 350,
    description: "Bhetki fish wrapped in banana leaf with spices",
    image: "images/bhetki_paturi.jpg",  
  },
  { id: 12,
    name: "Kosha Mangsho",
    price: 450, 
    description: "Slow-cooked spicy mutton curry",
    image: "images/kosha_mangsho.jpg",
  },
  { id: 13, 
    name: "Beguni",
    price: 80,    
    description: "Batter-fried eggplant slices",
    image: "images/beguni.jpg",
  },
  { id: 14,
    name: "Murgir Jhol",
    price: 300, 
    description: "Traditional Bengali chicken curry",
    image: "images/Murgir Jhol.jpg",
  },
];

// Cart state
let cart = {};

const menuListEl = document.getElementById("menuList");
const cartItemsEl = document.getElementById("cartItems");
const totalPriceEl = document.getElementById("totalPrice");
const checkoutBtn = document.getElementById("checkoutBtn");

// Render menu items on page
function renderMenuItems() {
  menuItems.forEach(item => {
    const card = document.createElement("div");
    card.className = "menu-card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <p><strong>₹${item.price}</strong></p>
      <button onclick="addToCart(${item.id})">Add to Cart</button>
    `;
    menuListEl.appendChild(card);
  });
}

// Add item to cart
function addToCart(id) {
  if(cart[id]) {
    cart[id].qty += 1;
  } else {
    const item = menuItems.find(i => i.id === id);
    cart[id] = {...item, qty: 1};
  }
  renderCart();
}

// Remove item from cart
function removeFromCart(id) {
  if(cart[id]) {
    cart[id].qty -= 1;
    if(cart[id].qty <= 0) {
      delete cart[id];
    }
    renderCart();
  }
}

// Render cart contents
function renderCart() {
  cartItemsEl.innerHTML = "";
  const keys = Object.keys(cart);

  if(keys.length === 0) {
    cartItemsEl.innerHTML = "<p>Your cart is empty.</p>";
    checkoutBtn.disabled = true;
    totalPriceEl.textContent = "0";
    return;
  }

  let total = 0;
  keys.forEach(key => {
    const item = cart[key];
    total += item.price * item.qty;
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
      <span>${item.name} x ${item.qty}</span>
      <span>₹${item.price * item.qty}</span>
      <button onclick="removeFromCart(${item.id})">-</button>
    `;
    cartItemsEl.appendChild(cartItem);
  });

  totalPriceEl.textContent = total.toFixed(2);
  checkoutBtn.disabled = false;
}

// Checkout action
checkoutBtn.addEventListener("click", () => {
  if (Object.keys(cart).length === 0) return;

  // Convert cart object to array for billing
  const cartArray = Object.values(cart);

  // Save to localStorage
  localStorage.setItem("cart", JSON.stringify(cartArray));

  // Redirect to billing page
  window.location.href = "billing-payment.html";
});

// Initialize page
renderMenuItems();
renderCart();
