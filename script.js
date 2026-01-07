// Fake login (for demo)
if (!localStorage.getItem("loggedIn")) {
  localStorage.setItem("loggedIn", "true");
}

function checkLogin() {
  if (localStorage.getItem("loggedIn") !== "true") {
    alert("Access denied!");
    window.location.href = "index.html";
  }
}

function logout() {
  localStorage.setItem("loggedIn", "false");
  window.location.href = "index.html";
}
