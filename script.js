const menuItems = [
  {
    name: "Aloo Posto",
    category: "veg",
    image: "images/aloo_posto.jpg",
    desc: "Potatoes cooked in poppy seed paste.",
  },
  {
    name: "Cha",
    category: "drink",
    image: "images/cha.jpg",
    desc: "Traditional Bengali tea with spices.",
  },
  {
    name: "Fuska",
    category: "snack",
    image: "images/fuska.jpg",
    desc: "Crispy hollow puris filled with tamarind water.",
  },
  {
    name: "Cola Bhatura",
    category: "snack",
    image: "images/cola_bhatura.jpg",
    desc: "Fluffy deep-fried bread served with spicy chickpeas.",
  },
  {
    name: "Fish Fry",
    category: "nonveg",
    image: "images/fish_fry.jpg",
    desc: "Crispy fried fish with traditional Bengali spices.",
  },
  {
    name: "Shorshe Ilish",
    category: "nonveg",
    image: "images/ilish.jpg",
    desc: "Hilsa fish in mustard curry.",
  },
  {
    name: "Paneer Butter Masala",
    category: "veg",
    image: "images/paneer.jpg",
    desc: "Rich & creamy North Indian delight.",
  },
  {
    name: "Chicken Kosha",
    category: "nonveg",
    image: "images/kosha.jpg",
    desc: "Slow-cooked spiced chicken curry.",
  },
  {
    name: "Mishti Doi",
    category: "dessert",
    image: "images/mishti_doi.jpg",
    desc: "Bengali sweetened yogurt.",
  },
  {
    name: "Rosogolla",
    category: "dessert",
    image: "images/rosogolla.jpg",
    desc: "Spongy sweet syrup balls.",
  },
  {
    name: "Aam Panna",
    category: "drink",
    image: "images/aam_panna.jpg",
    desc: "Raw mango summer drink.",
  },
  {
    name: "Lassi",
    category: "drink",
    image: "images/lassi.jpg",
    desc: "Traditional yogurt-based drink.",
  },
  // 3 more items added by me:
  {
    name: "Chingri Malai Curry",
    category: "nonveg",
    image: "images/chingri_malai_curry.jpg",
    desc: "Prawn cooked in coconut milk and spices.",
  },
  {
    name: "Begun Bharta",
    category: "veg",
    image: "images/begun_bharta.jpg",
    desc: "Smoked mashed eggplant with mustard oil.",
  },
  {
    name: "Pitha",
    category: "dessert",
    image: "images/pitha.jpg",
    desc: "Traditional Bengali rice cakes, sweet or savory.",
  }
];

const slider = document.getElementById("comboSlider");

combos.forEach(combo => {
  const div = document.createElement("div");
  div.className = "combo-item";
  div.innerHTML = `
    <img src="${combo.image}" alt="${combo.name}">
    <h3>${combo.name}</h3>
    <p>${combo.desc}</p>
  `;
  slider.appendChild(div);
});
