const map = new Map()
map.set(1, 'hello')
map.set(2, "i'm VUJSON")
map.set(1, '你好') //存在相同的键时，直接使用set覆盖
console.log(map)
console.log(map.delete(1), map.delete(5))
