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
const dsf = (root) => {
	console.log(root.val)
	root.children.forEach((item) => dsf(item))
}
dsf(root)
