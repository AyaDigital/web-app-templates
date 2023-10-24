const passwordInput = document.querySelector(".password input");
const eyeIcon = document.querySelector(".password .password-label i");

eyeIcon.addEventListener("click", () => {
	eyeIcon.className = `fa-solid fa-eye${passwordInput.type === "password" ? "" : "-slash"}`;
	passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});

const passwordRepeatInput = document.querySelector(".password-repeat input");
const eyeIconRepeat = document.querySelector(".password-repeat .password-repeat-label i");

eyeIconRepeat.addEventListener("click", () => {
	eyeIconRepeat.className = `fa-solid fa-eye${passwordRepeatInput.type === "password" ? "" : "-slash"}`;
	passwordRepeatInput.type = passwordRepeatInput.type === "password" ? "text" : "password";
});

new MultiSelectTag('insurance', {
	onChange: function(values) {
        console.log(values)
    }
})
