// DOM elements
const productContainer = document.getElementById("productContainer");
const filterBtn = document.getElementById("filterBtn");
const clearFilterBtn = document.getElementById("clearFilterBtn");
const filterCategoryInput = document.getElementById("filterCategory");
const addProductBtn = document.getElementById("addProductBtn");

let products = [];

// Load products from JSON
const loadProducts = async () => {
  try {
    const response = await fetch("products.json");
    products = await response.json();
    displayProducts();
  } catch (error) {
    console.error("Error loading products:", error);
    productContainer.innerHTML = `<p class="text-center text-danger">Failed to load products.</p>`;
  }
};

// Display products as cards
const displayProducts = (list = products) => {
  productContainer.innerHTML = "";
  if (list.length === 0) {
    productContainer.innerHTML = `<p class="text-center">No products found</p>`;
    return;
  }

  list.forEach((product) => {
    const card = document.createElement("div");
    card.className = "col-md-3 product-card";
    card.innerHTML = `
      <div class="card h-100">
        <img src="${product.image}" class="card-img-top" alt="${product.name}">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">Category: ${product.category}</p>
          <p class="card-text">Price: ₹${product.price}</p>
          <button class="btn btn-danger btn-sm" onclick="removeProduct('${product.name}')">Remove</button>
        </div>
      </div>
    `;
    productContainer.appendChild(card);
  });
};

// Add product using prompt()
addProductBtn.addEventListener("click", () => {
  const name = prompt("Enter product name:").trim();
  const price = parseFloat(prompt("Enter product price:"));
  const category = prompt("Enter product category:").trim();
  const image =
    prompt("Enter image URL (or leave blank for default):").trim() ||
    "https://via.placeholder.com/200x200?text=No+Image";

  if (!name || isNaN(price) || !category) {
    alert("Invalid input. Name, price, and category are required.");
    return;
  }

  products.push({ name, price, category, image });
  displayProducts();
});

// Remove product by name
const removeProduct = (name) => {
  const index = products.findIndex(
    (p) => p.name.toLowerCase() === name.toLowerCase()
  );
  if (index === -1) {
    alert(`Product "${name}" not found!`);
    return;
  }
  products.splice(index, 1);
  displayProducts();
};

// Filter products by category
filterBtn.addEventListener("click", () => {
  const category = filterCategoryInput.value.trim().toLowerCase();
  const filtered = products.filter(
    (p) => p.category.toLowerCase() === category
  );
  displayProducts(filtered);
});

// Clear filter
clearFilterBtn.addEventListener("click", () => {
  filterCategoryInput.value = "";
  displayProducts();
});

// Load products on page load
loadProducts();
