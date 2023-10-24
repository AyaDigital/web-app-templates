let inputs = document.querySelectorAll("input");
let button = document.querySelector(".verify");
let result = [];

function clickEvent(first, next, prev){
	console.log('inputs', inputs)
	

	if(first.value.length){
		if (next) {
			document.getElementById(next).focus();
		}
		
	} else if (prev) {
		document.getElementById(prev).focus();
	}
	
	inputs.forEach((input, index) => {
		console.log(input.value);
		if (input.value) {
			result[index] = input.value;
		} else {
			delete result[index] 
		}
	})
	

	if (result.join('').length === 6) {
		button.classList.add("active");
		button.addEventListener('click', () => {
			alert(result.join(''));
		})
	} else {
		button.classList.remove("active");
	}

}
