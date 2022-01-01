const graph = require('./00-graph')

const bfs = (n) => {
	const queue = [n]
	const set = new Set()
	set.add(n)
	while (queue.length) {
		const temp = queue.shift()
		console.log(temp)
		graph[temp].forEach((c) => {
			if (!set.has(c)) {
				set.add(c)
				queue.push(c)
			}
		})
	}
}
bfs(2)
