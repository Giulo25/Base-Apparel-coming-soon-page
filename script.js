const submit = document.querySelector("button");
const email = document.querySelector(".email");
const body = document.querySelector("body");
const formContainer = document.querySelector(".form-container");
const formMessage = document.querySelector(".form-message");

/* validate email */
const validateEmail = function (mail) {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
		return true;
	}
	return false;
};

const validEmail = function () {
	body.classList.remove("error");
	formMessage.innerHTML = "Thanks for your subscription!";
	email.setAttribute("placeholder", "");
	email.value = "";
};
const invalidEmail = function () {
	email.setAttribute("placeholder", "email@example.com");
	formMessage.innerHTML = "Please provide a valide email";
	body.classList.add("error");
};

submit.addEventListener("click", function (e) {
	if (validateEmail()) {
		validEmail();
		this.disabled = true;
	} else {
		invalidEmail();
	}
});
