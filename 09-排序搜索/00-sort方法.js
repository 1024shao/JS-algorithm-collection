const arr = [2, 1, 5, 3, 4]
console.log(arr.sort((a, b) => a - b))
console.log(arr)
console.log(arr.indexOf(2))

function test() {
	const j = 10
	while (j > 0) {
		return -1
	}
	console.log(j)
	return 2
}

console.log(test())
