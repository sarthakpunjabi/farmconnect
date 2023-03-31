filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("column");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

// Show filtered elements
function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

const addToCartButtons = document.querySelectorAll(".add-to-cart");

// Add event listener to each button
addToCartButtons.forEach(button => {
  button.addEventListener("click", addToCart);
});

// Function to add product to cart
function addToCart(event) {
  const button = event.target;
  const product = button.parentElement;
  const productName = product.querySelector("h3").innerText;
  const productPrice = product.querySelector(".price").innerText;
  
  // Create new cart item element
  const cartItem = document.createElement("div");
  cartItem.classList.add("cart-item");
  cartItem.innerHTML = `
    <p>${productName}</p>
    <p>${productPrice}</p>
  `;
  
  // Add cart item to cart
  const cart = document.querySelector(".cart-items");
  cart.appendChild(cartItem);
  
  // Update cart total
  const cartTotal = document.querySelector(".cart-total");
  const price = parseFloat(productPrice.replace("$", ""));
  cartTotal.innerText = `$${price + parseFloat(cartTotal.innerText.replace("$", ""))}`;
}