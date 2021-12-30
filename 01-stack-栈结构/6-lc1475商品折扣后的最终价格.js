/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
	const stack = []
	for (let i = 0; i < prices.length - 1; i++) {
		for (let j = i; j < prices.length - 1; j++) {
			if (prices[i] >= prices[j + 1]) {
				stack.push(prices[i] - prices[j + 1])
				break
			}
			if (j == prices.length - 2) {
				stack.push(prices[i])
			}
		}
	}
	stack.push(prices[prices.length - 1])
	return stack
}
console.log(finalPrices([10, 1, 1, 6]))
