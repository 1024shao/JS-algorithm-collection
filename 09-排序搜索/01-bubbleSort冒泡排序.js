Array.prototype.bubbleSort = function () {
	for (let i = 0; i < this.length - 1; i++) {
		for (let j = 0; j < this.length - i - 1; j++) {
			if (this[j] < this[j + 1]) {
				const temp = this[j]
				this[j] = this[j + 1]
				this[j + 1] = temp
			}
		}
	}
}

const arr = [1, 2, 0, 234]
arr.bubbleSort()
console.log(arr)
