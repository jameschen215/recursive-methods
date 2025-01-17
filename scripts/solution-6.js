function contains(obj, value) {
	for (const key in obj) {
		if (obj[key] === value) return true;

		if (typeof obj[key] === 'object') {
			return contains(obj[key], value);
		}
	}

	return false;
}

// So so smart
function containsRecursive(obj, searchValue) {
	if (typeof obj !== 'object' || obj === null) {
		return obj === searchValue;
	}

	for (const value of Object.values(obj)) {
		if (contains(value, searchValue)) {
			return true;
		}
	}

	return false;
}
const nestedObject = {
	data: {
		info: {
			stuff: {
				thing: {
					moreStuff: {
						magicNumber: 44,
						something: 'foo2',
					},
				},
			},
		},
	},
};

const hasIt = containsRecursive(nestedObject, 'foo2'); // true
const notHaveIt = containsRecursive(nestedObject, 3); // false

console.log({ hasIt, notHaveIt });
