var findKthLargest = function (nums, k) {
	const arr = nums.sort((a, b) => b - a)
	return arr[k - 1]
}

console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4))
