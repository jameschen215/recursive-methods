function totalIntegers(multiArray) {
	let total = 0;

	for (const item of multiArray) {
		if (typeof item === 'number') {
			total += 1;
		} else if (Array.isArray(item)) {
			total += totalIntegers(item, total);
		}
	}

	return total;
}

function totalIntegers2(multiArray) {
	if (multiArray.length === 0) return 0;

	const firstItem = multiArray[0];
	const remainItems = multiArray.slice(1);
	let total = 0;

	if (Number.isInteger(firstItem)) {
		total += 1;
	} else if (Array.isArray(firstItem)) {
		total += totalIntegers2(firstItem);
	}

	return total + totalIntegers2(remainItems);
}

const ar = [[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]];

console.log(totalIntegers2(ar));
