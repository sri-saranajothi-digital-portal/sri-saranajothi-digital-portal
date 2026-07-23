import { auth } from "../../firebase/auth.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        await signInWithEmailAndPassword(auth, email, password);

        message.style.color = "green";
        message.innerText = "Login Successful...";

        window.location.href = "index.html";

    } catch (error) {
        message.style.color = "red";
        message.innerText = error.message;
    }
});
