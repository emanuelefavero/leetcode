function solution(isBadVersion) {
  return function (n) {
    let start = 1
    end = n

    while (start < end) {
      let middle = Math.floor((start + end) / 2)
      if (isBadVersion(middle)) end = middle // look on left
      else start = middle + 1 // look on right
    }

    return start
  }
}

// NOTE: We simulate the isBadVersion API function here. No need to implement it on LeetCode.

function isBadVersion(n) {
  return n >= 4
}

// ------------------------
// TESTS

console.log(solution(isBadVersion)(5)) // 4
