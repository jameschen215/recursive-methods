function all(ar, callback) {
	for (let i = 0; i < ar.length; i++) {
		if (!callback(ar[i])) return false;
	}

	return true;
}

function allRecursive(ar, callback) {
	if (ar.length === 0) return false;
	if (ar.length === 1) return callback(ar[0]);

	return callback(ar[0]) && allRecursive(ar.slice(1), callback);
}

const allAreLessThanSeven = allRecursive([1, 2, 9], function (num) {
	return num < 7;
});

console.log(allAreLessThanSeven);
