function toggleFieldVisibility(fieldId) {
  var field = document.getElementById(fieldId);
  field.type = field.type === "password" ? "text" : "password";
}

function handleLogin(event) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (!username || !password) {
    displayError("Username and password are required.");
    return;
  }

  // Hardcoded credentials
  var validUsername = "satyam";
  var validPassword = "2212703";

  if (username === validUsername && password === validPassword) {
    localStorage.setItem("loggedin", true);
    localStorage.setItem("username", username);
    window.location.href = "https://www.youtube.com/";
  } else {
    displayError("Invalid username or password.");
  }
}
function displayError(message) {
  var errorText = document.getElementById("errorText");
  errorText.textContent = message;
}
