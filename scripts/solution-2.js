function power(base, expo) {
	let result = 1;

	for (let i = 0; i < expo; i++) {
		result *= base;
	}

	return result;
}

function powerRecursive(base, expo) {
	if (expo === 0) return 1;

	return base * powerRecursive(base, expo - 1);
}

console.log(powerRecursive(2, 2));
