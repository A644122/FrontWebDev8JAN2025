// script.js
const restaurants = [
  {
    id: 1,
    name: "Burger King",
    menu: [
      { name: "Whopper", price: 5 },
      { name: "Fries", price: 2 },
    ],
  },
  {
    id: 2,
    name: "Pizza Hut",
    menu: [
      { name: "Pepperoni Pizza", price: 10 },
      { name: "Garlic Bread", price: 4 },
    ],
  },
];

let cart = [];
let orderStatus = "Preparing";

// Display restaurants
function showRestaurants() {
  const restaurantsDiv = document.getElementById("restaurants");
  restaurantsDiv.innerHTML = restaurants
    .map(
      (restaurant) => `
    <div class="restaurant" onclick="showMenu(${restaurant.id})">
      <h3>${restaurant.name}</h3>
    </div>
  `
    )
    .join("");
}

// Display menu for a restaurant
function showMenu(restaurantId) {
  const restaurant = restaurants.find((r) => r.id === restaurantId);
  const menuDiv = document.getElementById("menu-items");
  menuDiv.innerHTML = restaurant.menu
    .map(
      (item) => `
    <div class="menu-item">
      <h3>${item.name}</h3>
      <p>$${item.price}</p>
      <button onclick="addToCart('${item.name}', ${item.price})">Add to Cart</button>
    </div>
  `
    )
    .join("");
  document.getElementById("menu").style.display = "block";
  document.getElementById("home").style.display = "none";
}

// Add item to cart
function addToCart(name, price) {
  cart.push({ name, price });
  alert(`${name} added to cart!`);
}

// Show cart
function showCart() {
  const cartDiv = document.getElementById("cart-items");
  cartDiv.innerHTML = cart
    .map(
      (item) => `
    <div class="cart-item">
      <h3>${item.name}</h3>
      <p>$${item.price}</p>
    </div>
  `
    )
    .join("");
  document.getElementById("cart").style.display = "block";
  document.getElementById("menu").style.display = "none";
}

// Track order
function trackOrder() {
  document.getElementById(
    "order-status"
  ).innerText = `Order Status: ${orderStatus}`;
  document.getElementById("track").style.display = "block";
  document.getElementById("cart").style.display = "none";
  initMap();
}

// Initialize Google Maps
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

// OTP Verification (simulated)
function generateOTP() {
  return Math.floor(1000 + Math.random() * 9000);
}

function verifyOTP() {
  const otp = prompt("Enter OTP:");
  if (otp === "1234") {
    // Simulated OTP
    alert("Order confirmed!");
    orderStatus = "Out for Delivery";
    trackOrder();
  } else {
    alert("Invalid OTP!");
  }
}

// Event Listeners
document.getElementById("checkout").addEventListener("click", () => {
  const otp = generateOTP();
  alert(`Your OTP is ${otp}. Use 1234 to simulate verification.`);
  verifyOTP();
});

// Initial Load
showRestaurants();
