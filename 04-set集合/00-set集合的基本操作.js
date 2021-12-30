const intersection = (nums1, nums2) => {
	//1. 两个数组去重
	let set1 = new Set([...nums1])
	let set2 = new Set([...nums2])
	let result = [] //存放最终结果
	for (let item of set1) {
		// 遍历set1
		if (set2.has(item)) {
			result.push(item)
		}
	}
	return result
}
const nums1 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
const nums2 = [2, 3, 3]
console.log(intersection(nums1, nums2)) // [2,3]
