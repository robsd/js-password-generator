length = document.getElementById('length');
displayLength = document.getElementById('display-length');
includeLowercase = document.getElementById('include-lowercase');
includeUppercase = document.getElementById('include-uppercase');
includeNumbers = document.getElementById('include-numbers');
includeSymbols = document.getElementById('include-symbols');
displayPassword = document.getElementById('display-password');

letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
symbols = ['!', '@', '£', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', ';', ':', '\'', '"', '\\', '|', '`', '~', ',', '<', '.', '>', '/', '?'];

length.oninput = function() {
	displayLength.innerHTML = length.value;
}

function generatePassword() {
	if (includeLowercase.checked || includeUppercase.checked || includeNumbers.checked || includeSymbols.checked)
	{
		password = "";
		while (password.length < length.value) {
			if (password.length < length.value && includeLowercase.checked) {
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
}