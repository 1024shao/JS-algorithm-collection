/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
	if (k >= arr.length) {
		return arr
	}
	// 正常情况
	arr.sort((a, b) => a - b).splice(k)
	return arr
}

console.log(getLeastNumbers([0, 1, 2, 1], 1))
