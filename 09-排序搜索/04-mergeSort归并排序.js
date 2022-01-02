Array.prototype.mergeSort = function () {
	const rec = (arr) => {
		if (arr.length == 1) return arr
		const mid = arr.length >> 1
		const left = arr.slice(0, mid)
		const right = arr.slice(mid, arr.length)
		const orderLeft = rec(left)
		const orderRight = rec(right)
		const res = []
		while (orderRight.length || orderLeft.length) {
			if (orderLeft.length && orderRight.length) {
				res.push(
					orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift()
				)
			} else if (orderLeft.length) {
				res.push(orderLeft.shift())
			} else {
				res.push(orderRight.shift())
			}
		}
		return res
	}
	const res = rec(this)
	res.forEach((v, i) => {
		this[i] = v
	})
}

const arr = [1, 3, 5, 3, 2, 1, 0]
arr.mergeSort()
console.log(arr)
console.log(arr.slice(0, 3)) //slice 方法是左闭右开
console.log(arr.slice(3, 7))
