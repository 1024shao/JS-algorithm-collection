Array.prototype.binarySearch = function (item) {
	let low = 0
	let high = this.length - 1
	while (low <= high) {
		let mid = (low + high) >> 1
		const element = this[mid]
		if (item < element) {
			high = mid - 1
		} else if (item > element) {
			low = mid + 1
		} else {
			return mid
		}
	}
	return -1
}

const arr = [1, 2, 3, 4, 5]
console.log(arr.binarySearch(2))
