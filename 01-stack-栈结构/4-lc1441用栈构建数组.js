/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
	const stack = [],
		result = []
	let i = 1,
		j = 0
	while (JSON.stringify(result) != JSON.stringify(target)) {
		result.push(i)
		stack.push('Push')
		if (result[result.length - 1] != target[j]) {
			result.pop()
			stack.push('Pop')
		} else {
			j++
		}
		i++
	}
	return stack
}

console.log(buildArray([1, 3], 3))
