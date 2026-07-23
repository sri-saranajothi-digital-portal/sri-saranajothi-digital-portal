import { auth } from "../../firebase/firebase-config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

const loginButton = document.getElementById("loginBtn");
const message = document.getElementById("message");

loginButton.addEventListener("click", async () => {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!email || !password) {
    message.style.color = "red";
    message.textContent = "Email සහ Password ඇතුළත් කරන්න.";
    return;
  }

  loginButton.disabled = true;
  loginButton.textContent = "Signing in...";

  try {
    await signInWithEmailAndPassword(auth, email, password);

    message.style.color = "green";
    message.textContent = "Login සාර්ථකයි.";

    window.location.href = "index.html";
  } catch (error) {
    message.style.color = "red";
    message.textContent = "Email හෝ Password වැරදියි.";
  } finally {
    loginButton.disabled = false;
    loginButton.textContent = "Login";
  }
});
