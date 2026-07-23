import { auth } from "../../firebase/firebase-config.js";

import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.replace("login.html");
    return;
  }

  const userEmail = document.getElementById("userEmail");

  if (userEmail) {
    userEmail.textContent = user.email;
  }
});

const logoutButton = document.getElementById("logoutBtn");

if (logoutButton) {
  logoutButton.addEventListener("click", async () => {
    try {
      await signOut(auth);
      window.location.replace("login.html");
    } catch (error) {
      console.error("Logout error:", error);
      alert("Logout වීමේදී දෝෂයක් ඇති වුණා.");
    }
  });
}
