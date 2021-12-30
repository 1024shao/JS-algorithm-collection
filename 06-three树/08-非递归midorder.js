const bt = require('./03-二叉树的先后中序遍历')

const midOrder = (root) => {
	if (!root) return
	const stack = []
	let p = root
	while (stack.length || p) {
		while (p) {
			stack.push(p)
			p = p.left
		}
		const n = stack.pop()
		console.log(n.val)
		p = n.right
	}
}

midOrder(bt)
