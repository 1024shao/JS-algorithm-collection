const root = {
	val: 'a',
	children: [
		{
			val: 'b',
			children: [
				{
					val: 'd',
					children: [],
				},
				{
					val: 'e',
					children: [],
				},
			],
		},
		{
			val: 'c',
			children: [
				{
					val: 'f',
					children: [],
				},
				{
					val: 'g',
					children: [],
				},
			],
		},
	],
}

//
const bsf = (root) => {
	const queue = [root]
	while (queue.length > 0) {
		const temp = queue.shift()
		console.log(temp.val)
		temp.children.forEach((item) => {
			queue.push(item)
		})
	}
}
bsf(root)
