const ADMIN_USER = "admin";
const ADMIN_PASS = "1234";

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === ADMIN_USER && pass === ADMIN_PASS) {
    localStorage.setItem("adminLoggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Wrong credentials");
  }
}

function checkAdmin() {
  if (localStorage.getItem("adminLoggedIn") !== "true") {
    window.location.href = "admin.html";
  }
}

function logout() {
  localStorage.removeItem("adminLoggedIn");
  window.location.href = "index.html";
}

function addProduct() {
  const name = document.getElementById("pname").value;
  const price = document.getElementById("pprice").value;

  if (!name || !price) {
    alert("Fill all fields");
    return;
  }

  let products = JSON.parse(localStorage.getItem("products")) || [];
  products.push({ name, price });
  localStorage.setItem("products", JSON.stringify(products));

  alert("Product added!");
  document.getElementById("pname").value = "";
  document.getElementById("pprice").value = "";
}
