const bt = require('./03-二叉树的先后中序遍历')

const preOrder = (root) => {
	if (!root) return
	const stack = [root]
	while (stack.length) {
		const n = stack.pop()
		console.log(n.val)
		if (n.right) stack.push(n.right)
		if (n.left) stack.push(n.left)
	}
}
preOrder(bt)
