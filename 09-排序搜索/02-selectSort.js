Array.prototype.selectionSort = function () {
	const len = this.length
	for (let i = 0; i < len - 1; i++) {
		let min = i
		for (let j = i + 1; j < len; j++) {
			if (this[min] > this[j]) {
				min = j
			}
		}
		const temp = this[i]
		this[i] = this[min]
		this[min] = temp
	}
}

const arr = [1, 3, 5, 3, 2, 1, 0]
arr.selectionSort()
console.log(arr)
