function factorial(num) {
	let result = 1;

	for (let i = 1; i <= num; i++) {
		result *= i;
	}

	return result;
}

function factorialRecursive(num) {
	if (num === 0) return 0;
	if (num === 1) return 1;

	return num * factorialRecursive(num - 1);
}
console.log(factorialRecursive(0));
