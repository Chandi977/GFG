// DOM elements
const productContainer = document.getElementById("productContainer");
const filterBtn = document.getElementById("filterBtn");
const clearFilterBtn = document.getElementById("clearFilterBtn");
const filterCategorySelect = document.getElementById("filterCategory");
const addProductBtn = document.getElementById("addProductBtn");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

// Modal form elements
const addProductForm = document.getElementById("addProductForm");
const productNameInput = document.getElementById("productName");
const productPriceInput = document.getElementById("productPrice");
const productCategoryInput = document.getElementById("productCategory");
const productImageInput = document.getElementById("productImage");
const addProductModal = new bootstrap.Modal(
  document.getElementById("addProductModal")
);

let products = [];

// Load products from JSON
const loadProducts = async () => {
  try {
    const response = await fetch("products.json");
    products = await response.json();
    populateCategoryDropdown();
    displayProducts();
  } catch (error) {
    console.error("Error loading products:", error);
    productContainer.innerHTML = `<p class="text-center text-danger">Failed to load products.</p>`;
  }
};

// Populate category dropdown dynamically
const populateCategoryDropdown = () => {
  const categories = [...new Set(products.map((p) => p.category))];
  filterCategorySelect.innerHTML = `<option value="">-- Select Category --</option>`;
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    filterCategorySelect.appendChild(option);
  });
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

// Remove product
const removeProduct = (name) => {
  const index = products.findIndex(
    (p) => p.name.toLowerCase() === name.toLowerCase()
  );
  if (index === -1) {
    alert(`Product "${name}" not found!`);
    return;
  }
  products.splice(index, 1);
  populateCategoryDropdown();
  displayProducts();
};

// Filter products by category
filterBtn.addEventListener("click", () => {
  const category = filterCategorySelect.value;
  if (!category) {
    displayProducts();
    return;
  }
  const filtered = products.filter((p) => p.category === category);
  displayProducts(filtered);
});

// Clear filter
clearFilterBtn.addEventListener("click", () => {
  filterCategorySelect.value = "";
  displayProducts();
});

// Search products by name
const searchProducts = () => {
  const query = searchInput.value.trim().toLowerCase();
  if (!query) {
    displayProducts();
    return;
  }
  const filtered = products.filter((p) => p.name.toLowerCase().includes(query));
  displayProducts(filtered);
};

searchBtn.addEventListener("click", searchProducts);
searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") searchProducts();
});

// Add product form submission
addProductForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!productNameInput.value.trim()) {
    productNameInput.classList.add("is-invalid");
    return;
  } else productNameInput.classList.remove("is-invalid");
  if (!productPriceInput.value || parseFloat(productPriceInput.value) <= 0) {
    productPriceInput.classList.add("is-invalid");
    return;
  } else productPriceInput.classList.remove("is-invalid");
  if (!productCategoryInput.value.trim()) {
    productCategoryInput.classList.add("is-invalid");
    return;
  } else productCategoryInput.classList.remove("is-invalid");
  if (
    productImageInput.value &&
    !/^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)$/.test(
      productImageInput.value.trim()
    )
  ) {
    productImageInput.classList.add("is-invalid");
    return;
  } else productImageInput.classList.remove("is-invalid");

  const newProduct = {
    name: productNameInput.value.trim(),
    price: parseFloat(productPriceInput.value),
    category: productCategoryInput.value.trim(),
    image:
      productImageInput.value.trim() ||
      "https://via.placeholder.com/200x200?text=No+Image",
  };

  products.push(newProduct);
  populateCategoryDropdown();
  displayProducts();
  addProductForm.reset();
  addProductModal.hide();
});

// Load products on page load
loadProducts();
