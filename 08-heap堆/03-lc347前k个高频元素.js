var topKFrequent = function (nums, k) {
	const map = new Map()
	const result = []
	const res = []
	nums.forEach((c) => {
		if (map.has(c)) {
			map.set(c, map.get(c) + 1)
		} else {
			map.set(c, 1)
		}
	})
	for (const item of map) {
		result.push(item)
	}
	console.log(result)
	babbleSort = (arr) => {
		for (let i = 0; i < arr.length - 1; i++) {
			for (let j = 0; j < arr.length - 1 - i; j++) {
				if (arr[j][1] < arr[j + 1][1]) {
					const temp = arr[j]
					arr[j] = arr[j + 1]
					arr[j + 1] = temp
				}
			}
		}
	}
	babbleSort(result)
	for (let i = 0; i < k; i++) {
		res.push(result[i][0])
	}
	console.log(result)
	return res
}

console.log(topKFrequent([3, 0, 1, 0], 1))
