function sumSquares(multiArray) {
	if (multiArray.length === 0) return 0;

	const firstItem = multiArray[0];
	const remainItems = multiArray.slice(1);
	let total = 0;

	if (Number.isInteger(firstItem)) {
		total += firstItem ** 2;
	} else if (Array.isArray(firstItem)) {
		total += sumSquares(firstItem);
	}

	return total + sumSquares(remainItems);
}

let l = [1, 2, 3];
console.log(sumSquares(l)); // 1 + 4 + 9 = 14

l = [[1, 2], 3];
console.log(sumSquares(l)); // 1 + 4 + 9 = 14

l = [[[[[[[[[1]]]]]]]]];
console.log(sumSquares(l)); // 1 = 1

l = [10, [[10], 10], [10]];
console.log(sumSquares(l)); // 100 + 100 + 100 + 100 = 400
