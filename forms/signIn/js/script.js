const passwordInput = document.querySelector(".password input");
const eyeIcon = document.querySelector(".password i");

eyeIcon.addEventListener("click", () => {
	eyeIcon.className = `fa-solid fa-eye${passwordInput.type === "password" ? "" : "-slash"}`;
	passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});
