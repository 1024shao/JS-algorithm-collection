/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
	stones.sort((a, b) => b - a)
	console.log(stones)
	while (stones.length != 1) {
		stones.sort((a, b) => b - a)
		stones[0] = stones[0] - stones[1]
		stones.splice(1, 1)
	}
	return stones[0]
}

// console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]))

const arr = [2, 7, 4, 1, 8, 1]
const arr1 = [1, 2, 0]
console.log(arr1.sort((a, b) => a - b))
