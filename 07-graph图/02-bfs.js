const graph = require('./00-graph')

const bfs = (n) => {
	const queue = [n]
	const set = new Set()
	set.add(n)
	console.log(graph[0], 'gra')
	while (queue.length) {
		console.log(queue)
		const temp = queue.shift()
		console.log(temp)
		graph[n].forEach((c) => {
			if (!set.has(c)) {
				set.add(c)
				queue.push(c)
			}
		})
	}
}
bfs(2)
