let arr = [
	{ id: 1, name: '部门1', pid: 0 },
	{ id: 2, name: '部门2', pid: 1 },
	{ id: 3, name: '部门3', pid: 1 },
	{ id: 4, name: '部门4', pid: 3 },
	{ id: 5, name: '部门5', pid: 4 },
]

function arrayToThree(items) {
	let result = []
	let threeMap = []
	for (const item of items) {
		threeMap[item.id] = { ...item, children: [] }
	}
	for (const item of items) {
		let id = item.id
		let pid = item.pid
		const threeItem = threeMap[id]
		if (pid === 0) {
			result.push(threeItem)
		} else {
			if (!threeMap[pid]) {
				threeMap[pid] = { children: [] }
			} else {
				threeMap[pid].children.push(threeItem)
			}
		}
	}
	return result
}
console.log(arrayToThree(arr))
