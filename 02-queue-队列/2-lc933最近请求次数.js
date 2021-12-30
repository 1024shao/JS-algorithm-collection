var RecentCounter = function () {
	this.q = []
}

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
	this.q.push(t)
	while (this.q[0] < t - 3000) {
		this.q.shift()
	}
	return this.q.length
}

let r = new RecentCounter()

console.log(r.ping())
console.log(r.ping(1))
console.log(r.ping(100))
console.log(r.ping(3001))
console.log(r.ping(3002))
