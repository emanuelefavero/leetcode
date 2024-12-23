// * Number of Recent Calls

/*
You have a RecentCounter class which counts the number of recent requests within a certain time frame.

Implement the RecentCounter class:

- RecentCounter() Initializes the counter with zero recent requests.
- int ping(int t) Adds a new request at time t, where t represents some time in milliseconds, and returns the number of requests that has happened in the past 3000 milliseconds (including the new request). Specifically, return the number of requests that have happened in the inclusive range [t - 3000, t].

It is guaranteed that every call to ping uses a strictly larger value of t than the previous call.
*/

// TIP: This solution uses a Queue

class RecentCounter {
  constructor() {
    this.queue = []
  }

  /**
   * @param {number} t
   * @returns {number}
   */

  // O(n) time | O(1) space
  ping(t) {
    this.queue.push(t)

    while (this.queue[0] < t - 3000) {
      this.queue.shift()
    }

    return this.queue.length
  }
}

// --------------------------
// SOLUTION 2

class RecentCounter2 {
  constructor() {
    this.requests = []
  }

  ping(t) {
    this.requests.push(t)
    let counter = 0

    for (let i = this.requests.length - 1; i >= 0; i--) {
      if (this.requests[i] >= t - 3000) counter++
      else break
    }

    return counter
  }
}

// --------------------------
// TESTS

const recentCounter = new RecentCounter()
console.log(recentCounter.ping(1)) // 1
console.log(recentCounter.ping(100)) // 2
console.log(recentCounter.ping(3001)) // 3
console.log(recentCounter.ping(3002)) // 3
/*
Explanation
RecentCounter recentCounter = new RecentCounter();
recentCounter.ping(1);     // requests = [1], range is [-2999,1], return 1
recentCounter.ping(100);   // requests = [1, 100], range is [-2900,100], return 2
recentCounter.ping(3001);  // requests = [1, 100, 3001], range is [1,3001], return 3
recentCounter.ping(3002);  // requests = [1, 100, 3001, 3002], range is [2,3002], return 3
*/

// 2
const recentCounter2 = new RecentCounter2()
console.log(recentCounter2.ping(1)) // 1
console.log(recentCounter2.ping(100)) // 2
console.log(recentCounter2.ping(3001)) // 3
console.log(recentCounter2.ping(3002)) // 3
