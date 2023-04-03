// console.log("Hi i am here ")
// const addToCartButtons = document.querySelectorAll('.add-to-cart');

// addToCartButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const productId = button.getAttribute('data-id');
//     const productName = button.getAttribute('data-name');
//     const productPrice = button.getAttribute('data-price');

//     const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

//     const existingItem = cartItems.find(item => item.id === productId);

//     if (existingItem) {
//       existingItem.quantity++;
//     } else {
//       cartItems.push({
//         id: productId,
//         name: productName,
//         price: productPrice,
//         quantity: 1
//       });
//     }

//     localStorage.setItem('cartItems', JSON.stringify(cartItems));

//     updateCartBadge();
//   });
// });

// function updateCartBadge() {
//   const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

//   const cartBadge = document.querySelector('.badge');

//   if (cartItems.length > 0) {
//     const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
//     cartBadge.innerText = totalQuantity;
//     cartBadge.style.display = 'flex';
//   } else {
//     cartBadge.style.display = 'none';
//   }
// }

// const addToCartButton = document.querySelector('.add-to-cart');

// // Add a click event listener to the button
// addToCartButton.addEventListener('click', () => {
//   // Get the product ID, name, and price from the data attributes
//   const productId = addToCartButton.getAttribute('data-id');
//   const productName = addToCartButton.getAttribute('data-name');
//   const productPrice = addToCartButton.getAttribute('data-price');

//   // Create a new item object with the product ID, name, price, and quantity
//   const item = {
//     id: productId,
//     name: productName,
//     price: productPrice,
//     quantity: 1
//   };

//   // Get the existing cart items from local storage or create an empty array
//   let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

//   // Check if the item is already in the cart
//   const itemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);

//   if (itemIndex === -1) {
//     // If the item is not in the cart, add it to the cart
//     cartItems.push(item);
//   } else {
//     // If the item is already in the cart, increase its quantity by 1
//     cartItems[itemIndex].quantity++;
//   }

//   // Save the updated cart items to local storage
//   localStorage.setItem('cartItems', JSON.stringify(cartItems));

//   // Update the cart badge in the navbar
//   updateCartBadge();
// });

console.log("Carousel")
const carouselTrack = document.querySelector('.carousel-track');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

let currentIndex = 0;
let itemWidth = carouselItems[0].getBoundingClientRect().width;
let itemCount = carouselItems.length;

function setCarouselPosition() {
    carouselTrack.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

function moveToNext() {
    currentIndex++;
    if (currentIndex > itemCount - 1) {
        currentIndex = 0;
    }
    setCarouselPosition();
}

function moveToPrev() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = itemCount - 1;
    }
    setCarouselPosition();
}

prevButton.addEventListener('click', moveToPrev);
nextButton.addEventListener('click', moveToNext);

window.addEventListener('resize', function () {
    itemWidth = carouselItems[0].getBoundingClientRect().width;
    setCarouselPosition();
});


