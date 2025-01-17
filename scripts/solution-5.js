function productOfArray(numbers) {
	let product = 1;

	numbers.forEach((num) => (product *= num));

	return product;
}

function productOfArrayRecursive(numbers) {
	if (numbers.length === 0) return 0;
	if (numbers.length === 1) return numbers[0];

	return numbers[0] * productOfArrayRecursive(numbers.slice(1));
}

const six = productOfArrayRecursive([1, 2, 3]);
const sixty = productOfArrayRecursive([1, 2, 3, 10]);

console.log({ six, sixty });
