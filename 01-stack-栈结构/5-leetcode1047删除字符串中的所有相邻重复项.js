/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
	let stack = []
	let top = ''
	for (let i = 0; i < s.length; i++) {
		top = s[i]
		if (stack[stack.length - 1] == top) {
			stack.pop()
		} else {
			stack.push(top)
		}
	}
	return stack.join('')
}
console.log(removeDuplicates('abbaca'))
