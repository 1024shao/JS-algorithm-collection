const bt = require('./03-二叉树的先后中序遍历')

const postOrder = (root) => {
	if (!root) return
	postOrder(root.left)
	postOrder(root.right)
	console.log(root.val)
}

postOrder(bt)
