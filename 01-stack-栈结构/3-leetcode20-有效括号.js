/**
 * @param {string} s
 * @return {boolean}
 */
/* 
示例 1：

输入：s = "()"
输出：true
示例 2：

输入：s = "()[]{}"
输出：true
示例 3：

输入：s = "(]"
输出：false
示例 4：

输入：s = "([)]"
输出：false
示例 5：

输入：s = "{[]}"
输出：true
*/
var isValid = function (s) {
	const stack = []
	const map = new Map()
	map.set('(', ')')
	map.set('{', '}')
	map.set('[', ']')
	for (let i = 0; i < s.length; i++) {
		let cur = s[i]
		if (map.has(cur)) {
			stack.push(map.get(cur))
		} else {
			let top = stack[stack.length - 1]
			if (cur === map.get(top)) {
				stack.pop()
			} else {
				return false
			}
		}
		// switch (top) {
		// 	case '[':
		// 		stack.push(']')
		// 		break
		// 	case '{':
		// 		stack.push('}')
		// 		break
		// 	case '(':
		// 		stack.push(')')
		// 		break
		// 	default:
		// 		console.log(stack)
		// 		if (top != stack.pop()) return false
		// }
	}
	return stack.length == 0
}
console.log(isValid('[]'))
