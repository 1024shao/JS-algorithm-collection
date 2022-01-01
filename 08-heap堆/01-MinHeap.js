class MinHeap {
	constructor() {
		this.heap = []
	}
	swap(i1, i2) {
		const temp = this.heap[i1]
		this.heap[i1] = this.heap[i2]
		this.heap[i2] = temp
	}
	getParentIndex(i) {
		return (i - 1) >> 2
	}
	shiftUp(index) {
		if (index == 0) return
		const parentIndex = this.getParentIndex(index)
		if (this.heap[parentIndex] > this.heap(index)) {
			this.swap(parentIndex, index)
			this.shiftUp(parentIndex)
		}
	}
	insert(value) {
		this.heap.push(value)

		this.shiftUp(this.heap.length - 1)
	}
}
