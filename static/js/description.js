// Get the add to cart button
const addToCartButton = document.querySelector(".add-to-cart");

// Add event listener to the button
addToCartButton.addEventListener("click", addToCart);

// Function to add product to cart
function addToCart() {
  const productName = document.querySelector("h1").innerText;
  const productPrice = document.querySelector(".price").innerText;
  const productQuantity = document.querySelector("#quantity").value;
  
  // Create new cart item element
  const cartItem = document.createElement("div");
  cartItem.classList.add("cart-item");
  cartItem.innerHTML = `
    <p>${productName} x ${productQuantity}</p>
    <p>${productPrice}</p>
  `;
  
  // Add cart item to cart
  const cart = document.querySelector(".cart-items");
  cart.appendChild(cartItem);
  
  // Update cart total
  const cartTotal = document.querySelector(".cart-total");
  const price = parseFloat(productPrice.replace("$", ""));
  cartTotal.innerText = `$${price * productQuantity + parseFloat(cartTotal.innerText.replace("$", ""))}`;
}
