// dummy


// script.js

// Function to handle the "Add to Cart" button click
function addToCart(event) {
    event.preventDefault();
    const product = event.target.closest(".pro");
    const productName = product.querySelector("h5").textContent;
    const productPrice = product.querySelector("h4").textContent;
  
    // You can implement your own logic to add the product to the cart or perform other actions.
    // For this example, we'll just display an alert with the product name and price.
    alert(`Added to cart: ${productName} - Price: ${productPrice}`);
  }
  
  // Add event listeners to "Add to Cart" buttons
  document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".pro .cart");
  
    addToCartButtons.forEach((button) => {
      button.addEventListener("click", addToCart);
    });
  });
  






// navbar in responsive
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click',() => {
        nav.classList.add('active');
    })
}

if(close){
   close.addEventListener('click',() => {
        nav.classList.remove('active');
    })
}

