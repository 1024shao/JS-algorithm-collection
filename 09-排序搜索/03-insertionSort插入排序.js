Array.prototype.insertionSort = function () {
	for (let i = 1; i < this.length; i++) {
		let j = i
		const temp = this[i]
		while (j > 0) {
			if (this[j - 1] > temp) {
				this[j] = this[j - 1]
			} else {
				break
			}
			j -= 1
		}
		this[j] = temp
	}
}

const arr = [1, 3, 5, 3, 2, 1, 0]
arr.insertionSort()
console.log(arr)
