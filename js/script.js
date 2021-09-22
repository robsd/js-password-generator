length = document.getElementById('length');
displayLength = document.getElementById('display-length');
includeUppercase = document.getElementById('include-uppercase');
includeNumbers = document.getElementById('include-numbers');
includeSymbols = document.getElementById('include-symbols');
displayPassword = document.getElementById('display-password');

letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
symbols = ['!', '@', '£', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', ';', ':', '\'', '"', '\\', '|', '`', '~', ',', '<', '.', '>', '/', '?'];

generatePassword();

length.oninput = function() {
	displayLength.innerHTML = length.value;
	generatePassword();
}

includeUppercase.oninput = function() {
	generatePassword();
}

includeNumbers.oninput = function() {
	generatePassword();
}

includeSymbols.oninput = function() {
	generatePassword();
}

function generatePassword() {
	password = "";
	while (password.length < length.value) {
		if (password.length < length.value) {
			password += letters[Math.floor(Math.random() * letters.length)];
		}
		if (password.length < length.value && includeUppercase.checked) {
			password += letters[Math.floor(Math.random() * letters.length)].toUpperCase();
		}
		if (password.length < length.value && includeNumbers.checked) {
			password += numbers[Math.floor(Math.random() * numbers.length)];
		}
		if (password.length < length.value && includeSymbols.checked) {
			password += symbols[Math.floor(Math.random() * symbols.length)];
		}
	}
	password = password.split('').sort(function() {
		return 0.5 - Math.random();
	}).join('');
	displayPassword.value = password;
}