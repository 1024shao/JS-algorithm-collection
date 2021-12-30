var intersection = function (nums1, nums2) {
	let set2 = new Set([...nums2])
	return [...new Set([...nums1].filter((item) => set2.has(item)))]
}
function test(nums1, nums2) {
	let set = new Set([...nums1])
	let commonSet = new Set([...nums2].filter((item) => set.has(item)))
	let array1 = nums1.filter((item) => commonSet.has(item))
	let array2 = nums2.filter((item) => commonSet.has(item))
}

console.log(intersection([1, 2, 3, 2, 1], [2, 2, 1]))
