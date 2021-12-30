function test(num) {
	const stack = []
	while (num / 2 != 0) {
		stack.push(num % 2)
		num = parseInt(num / 2)
	}
	let result = ''
	while (stack.length) {
		result += stack.pop()
	}
	return result
}

console.log(test(35))
