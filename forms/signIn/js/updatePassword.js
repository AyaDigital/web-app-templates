const newPasswordInput = document.querySelector(".new-password input");
const confirmPasswordInput = document.querySelector(".confirm-password input");

const eyeIconNewPassword = document.querySelector(".new-password .new-password-label i");
const eyeIconConfirmPassword = document.querySelector(".confirm-password .confirm-password-label i");

eyeIconNewPassword.addEventListener("click", () => {
	eyeIconNewPassword.className = `fa-solid fa-eye${newPasswordInput.type === "password" ? "" : "-slash"}`;
	newPasswordInput.type = newPasswordInput.type === "password" ? "text" : "password";
});

eyeIconConfirmPassword.addEventListener("click", () => {
	console.log('confirmPasswordInput.type', confirmPasswordInput.type)
	eyeIconConfirmPassword.className = `fa-solid fa-eye${confirmPasswordInput.type === "password" ? "" : "-slash"}`;
	confirmPasswordInput.type = confirmPasswordInput.type === "password" ? "text" : "password";
});

let passwordValue = document.querySelector(".new-password").value;
let message = document.querySelector(".password-error");

function checkRepeat(repeatPassword) {
	if (repeatPassword.value.length) {
		if(String(repeatPassword.value) !== String(passwordValue)) {
			console.log('message', message)
			message.classList.add("active");
		}
		console.log('repeatPassword.value', repeatPassword.value)
		console.log('passwordValue', repeatPassword.value)
		console.log('===', repeatPassword.value === passwordValue)
		if(String(repeatPassword.value) === String(passwordValue)) {
			message.classList.remove("active");
		}
	} else {
		message.classList.remove("active");
	}

}