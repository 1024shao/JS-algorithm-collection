/**
 * @param {number[]} score
 * @return {string[]}
 */
/* 
输入：score = [10,3,8,9,4]
输出：["Gold Medal","5","Bronze Medal","Silver Medal","4"]
*/
var findRelativeRanks = function (score) {
	const queue = []
	let arr = JSON.parse(JSON.stringify(score)) //备份数组
	for (let i = 0; i < score.length - 1; i++) {
		for (let j = 0; j < score.length - 1 - i; j++) {
			if (score[j] < score[j + 1]) {
				let temp = score[j]
				score[j] = score[j + 1]
				score[j + 1] = temp
			}
		}
	}
	while (arr.length) {
		let result = score.indexOf(arr.shift())
		console.log(score)
		console.log(result)
		switch (result) {
			case 0:
				queue.push('Gold Medal')
				break
			case 1:
				queue.push('Silver Medal')
				break
			case 2:
				queue.push('Bronze Medal')
				break
			default:
				queue.push(result + 1 + '')
				break
		}
	}
	return queue
}

console.log(findRelativeRanks([1, 2, 3, 4, 5])) //[10,9.8,4,3]
