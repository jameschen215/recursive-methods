function replicate(count, value) {
	if (count <= 0 || value === undefined) return [];

	return [value, ...replicate(count - 1, value)];
}

console.log(replicate(3, 5)); // [5, 5, 5]
console.log(replicate(1, 69)); // [69]
console.log(replicate(-2, 6)); // []
