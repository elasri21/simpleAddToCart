let cart = [];
const menu = document.querySelector(".product-list");
const confirmOrders = document.querySelector(".confirm-order");
const numberOfProductPicked = document.querySelector("aside h2 span");

// Function to add a product to the cart
function addToCart(product) {
    // Check if the product already exists in the cart
    let existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        // If it exists, increase the quantity
        existingProduct.quantity += 1;
    } else {
        // If it doesn't exist, add the product with quantity 1
        product.quantity = 1;
        cart.push(product);
    }
    updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
    let cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = '';

    if (cart.length === 0) {
        cartContainer.innerHTML = `
        <p>Your cart is empty</p>
        <img class="empty-cart" src="illustration-empty-cart.svg" alt="empty cart">
        `;
        return;
    }

    cart.forEach(item => {
        let cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" >
            <div class="info">
                <p>${item.name} - $${item.price} x ${item.quantity}</p>
                <button onclick="removeFromCart(${item.id})">Remove</button>
            </div>
            `;
        cartContainer.appendChild(cartItem);
    });

    // Display total price
    let totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    let totalPriceElement = document.createElement('p');
    totalPriceElement.className = 'total-price';
    totalPriceElement.innerHTML = `Total: $${totalPrice.toFixed(2)}`;
    cartContainer.appendChild(totalPriceElement);
    updateNumberOfProducts();
}

// Function to remove a product from the cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
    updateNumberOfProducts()
}

// function to confirm orders
function confirmPay() {
    let totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    let confirmBox = document.createElement("div");
    confirmBox.classList.add("confirm-box");
    confirmBox.innerHTML = `
    <h3>order confirmed</h3>
    <p>Total Price: $${totalPrice}</p>
    <button class="reload">go to menu</button>
    `;
    document.body.appendChild(confirmBox);
    confirmBox.querySelector(".reload").addEventListener("click", () => {
        cart.length = 0;
        updateCartDisplay();
        updateNumberOfProducts()
        confirmBox.remove();
    });
}

// get number of items
function updateNumberOfProducts() {
    let totalProducts = cart.reduce((prev, cur) => prev + cur.quantity, 0);
    // console.log(totalProducts);
    numberOfProductPicked.textContent = totalProducts;
}

// Example product data and event listeners
const products = [
    { id: 1, name: 'Product 1', price: 10.00, image: "https://picsum.photos/150/150" },
    { id: 2, name: 'Product 2', price: 20.00, image: "https://picsum.photos/150/150" },
    { id: 3, name: 'Product 3', price: 30.00, image: "https://picsum.photos/150/150" },
    { id: 4, name: 'Product 4', price: 20.50, image: "https://picsum.photos/150/150" },
    { id: 5, name: 'Product 5', price: 17.50, image: "https://picsum.photos/150/150" },
    { id: 6, name: 'Product 6', price: 32.00, image: "https://picsum.photos/150/150" },
    { id: 7, name: 'Product 7', price: 29.50, image: "https://picsum.photos/150/150" },
    { id: 8, name: 'Product 8', price: 12.50, image: "https://picsum.photos/150/150" },
];

products.forEach((product) => {
    let item = document.createElement("div");
    item.classList.add("product-item");
    item.innerHTML = `
        <p>Product ${product.id} - $${product.price}</p>
        <img src="${product.image}" alt="${product.name}">
        <button id="add-to-cart-${product.id}">Add to Cart</button>
    `;
    menu.appendChild(item);
});

products.forEach(product => {
    let productButton = document.getElementById(`add-to-cart-${product.id}`);
    productButton.addEventListener('click', () => addToCart(product));
});

// Initialize the cart display
updateCartDisplay();
confirmOrders.addEventListener("click", () => {
    if (cart.length > 0) confirmPay();
});

