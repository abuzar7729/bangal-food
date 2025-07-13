const menuItems = [
  {
    name: "Shorshe Ilish",
    description: "Traditional mustard Hilsa fish curry",
    price: 320,
    image: "images/ilish.jpg",
    category: "nonveg",
  },
  {
    name: "Macher Jhol",
    description: "Spicy fish curry with potatoes",
    price: 250,
    image: "images/macher_jhol.jpg",
    category: "nonveg",
  },
  {
    name: "Aloo Posto",
    description: "Potato cooked in poppy seed paste",
    price: 150,
    image: "images/aloo_posto.jpg",
    category: "veg",
  },
  {
    name: "Mishti Doi",
    description: "Sweetened Bengali fermented yogurt",
    price: 80,
    image: "images/mishti_doi.jpg",
    category: "dessert",
  },
  {
    name: "Lassi",
    description: "Refreshing yogurt-based drink",
    price: 60,
    image: "images/lassi.jpg",
    category: "drink",
  } ,
  { name: "Chingri Malai Curry",
    description: "Prawn cooked in coconut milk",  
    price: 400,
    image: "images/chingri_malai_curry.jpg",
    category: "nonveg",
  },  
  { name: "Luchi Aloo Dum",
    description: "Fried flatbread with spiced potatoes",
    price: 200,
    image: "images/luchi_aloo_dum.jpg",
    category: "veg",
  },
  { name: "Prawn Pulao",
    description: "Fragrant rice with prawns and spices",
    price: 350,
    image: "images/prawn_pulao.jpg",
    category: "nonveg",
  },
  { name: "Cholar Dal",
    description: "Bengal gram lentils cooked with coconut",
    price: 120,

    image: "images/cholar_dal.jpg",
    category: "veg",
  },
  { name: "Sandesh",
    description: "Soft Bengali sweet made from fresh cheese",
    price: 60,
    image: "images/sandesh.jpg",

    category: "dessert",
  },
  { name: "Rosogolla",
    description: "Spongy cheese balls in sugar syrup",
    price: 50,
    image: "images/rosogolla.jpg",
    category: "dessert",

  },
  { name: "Mishti Pulao",
    description: "Sweet rice dish with nuts and raisins",

    price: 180,
    image: "images/mishti_pulao.jpg",
    category: "veg",
  },
  { name: "Chai",
    description: "Traditional Indian tea with spices",
    price: 30,
    image: "images/chai.jpg",
    category: "drink",  
  },
  { name: "Murgir Jhol",  
    description: "Chicken curry with potatoes and spices",
    price: 300,
    image: "images/murgir_jhol.jpg",
    category: "nonveg",
  },
  { name: "Beguni",
    description: "Batter-fried eggplant slices",
    price: 80,
    image: "images/beguni.jpg",

    category: "veg",
  },
  { name: "Bhetki Paturi",

    description: "Bhetki fish wrapped in banana leaf with spices",
    price: 350,
    image: "images/bhetki_paturi.jpg",
    category: "nonveg",
  },
];

// Function to render filtered menu
function renderMenu(filter) {
  const container = document.getElementById("menuGrid");
  container.innerHTML = "";

  const filteredItems = filter === "all"
    ? menuItems
    : menuItems.filter(item => item.category === filter);

  filteredItems.forEach(item => {
    const card = document.createElement("div");
    card.className = "menu-card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" loading="lazy" />
      <div class="menu-card-content">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <p class="price">₹${item.price}</p>
        <button onclick="alert('Order feature coming soon')">Order Now</button>
      </div>
    `;
    container.appendChild(card);
  });
}

// Function called by filter buttons
function filterMenu(category) {
  renderMenu(category);
}

// Call default filter on load
window.onload = () => {
  filterMenu("all");
};
