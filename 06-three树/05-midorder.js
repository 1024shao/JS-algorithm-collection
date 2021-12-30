const bt = require('./03-二叉树的先后中序遍历')

const midOrder = (root) => {
	if (!root) return
	midOrder(root.left)
	console.log(root.val)
	midOrder(root.right)
}

midOrder(bt)
