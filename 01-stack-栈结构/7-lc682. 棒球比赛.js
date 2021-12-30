/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
	const stack = []
	for (let i = 0; i < ops.length; i++) {
		if (!isNaN(ops[i])) {
			stack.push(parseInt(ops[i]))
		} else {
			switch (ops[i]) {
				case 'C':
					stack.pop()
					break
				case 'D':
					stack.push(stack[stack.length - 1] * 2)
					break
				case '+':
					stack.push(stack[stack.length - 1] + stack[stack.length - 2])
					break
			}
		}
	}
	return stack.reduce((pre, cur) => pre + cur, 0)
}

console.log(calPoints(['5', '2', 'C', 'D', '+']))
