const bt = require('./03-二叉树的先后中序遍历')

const preOrder = (bt) => {
	if (!bt) return
	console.log(bt.val)
	preOrder(bt.left)
	preOrder(bt.right)
}
preOrder(bt)
