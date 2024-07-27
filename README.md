# Product List with Cart

This project implements a simple shopping cart functionality. Users can add products to their cart, view the cart contents, remove products from the cart, and confirm their orders. The application is built using HTML, CSS, and JavaScript.

## Features

- Add products to the cart
- View the cart contents
- Remove products from the cart
- Display the total price of the items in the cart
- Confirm orders

## File Structure

- `index.html`: The main HTML file containing the structure of the page.
- `styles.css`: The CSS file containing the styles for the page.
- `script.js`: The JavaScript file containing the functionality for the cart.

## JavaScript Functions

### `addToCart(product)`

Adds a product to the cart. If the product already exists in the cart, it increments the quantity; otherwise, it adds the product with a quantity of 1.

### `updateCartDisplay()`

Updates the display of the cart, showing the products, their quantities, and the total price. If the cart is empty, it displays a message indicating that.

### `removeFromCart(productId)`

Removes a product from the cart based on its ID and updates the cart display.

### `confirmPay()`

Confirms the order by displaying a confirmation message and the total price. It also provides a button to reset the cart and go back to the menu.

### `updateNumberOfProducts()`

Updates the number of products displayed in the cart indicator.

## Event Listeners

- Event listeners are added to the "Add to Cart" buttons for each product, calling the `addToCart(product)` function when clicked.
- An event listener is added to the "Confirm Order" button, calling the `confirmPay()` function if there are items in the cart.

## Example Product Data

The example product data used in this project is an array of objects, each containing the following properties:
- `id`: A unique identifier for the product.
- `name`: The name of the product.
- `price`: The price of the product.
- `image`: A URL to the product image.

```javascript
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
