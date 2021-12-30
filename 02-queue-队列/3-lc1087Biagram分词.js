/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function (text, first, second) {
	const queue = []
	const arr = text.split(' ')
	while (arr.length) {
		if (arr[0] != first) {
			arr.shift()
		} else {
			arr.shift()
			if (arr[0] == second) {
				if (arr.length >= 2) {
					queue.push(arr[1])
				}
			}
		}
	}
	return queue
}

console.log(findOcurrences('we we we we will we we', 'we', 'we'))
