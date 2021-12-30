/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	let l = 0
	let max = 0
	let map = new Map()
	for (let r = 0; r < s.length; r++) {
		if (map.has(s[r]) && map.get(s[r]) >= l) {
			l = map.get(s[r]) + 1
		}
		max = Math.max(max, r - l + 1)
		map.set(s[r], r)
	}

	return max
}
let s = 'abcabcbb'

console.log(lengthOfLongestSubstring(s))
