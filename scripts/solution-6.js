function contains(obj, value) {
	for (const key in obj) {
		if (obj[key] === value) return true;

		if (typeof obj[key] === 'object') {
			return contains(obj[key], value);
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

const hasIt = contains(nestedObject, 'foo2'); // true
const notHaveIt = contains(nestedObject, 3); // false

console.log({ hasIt, notHaveIt });
