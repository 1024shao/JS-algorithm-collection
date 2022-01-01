var titleToNumber = function (columnTitle) {
	const arr = columnTitle.split('')
	const res = []
	let count = 0
	const len = columnTitle.length
	for (let i = 0; i < len; i++) {
		res.push(arr[i].charCodeAt() - 64)
		count += res[i] * 26 ** (len - i - 1)
	}
	return count
}

console.log(titleToNumber('AB'))
