// * Open the Lock

/*
You have a lock in front of you with 4 circular wheels. Each wheel has 10 slots: '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'. The wheels can rotate freely and wrap around: for example we can turn '9' to be '0', or '0' to be '9'. Each move consists of turning one wheel one slot.

The lock initially starts at '0000', a string representing the state of the 4 wheels.

You are given a list of deadends dead ends, meaning if the lock displays any of these codes, the wheels of the lock will stop turning and you will be unable to open it.

Given a target representing the value of the wheels that will unlock the lock, return the minimum total number of counter required to open the lock, or -1 if it is impossible.
*/

/*
EXAMPLE 1:

Input: deadends = ["0201","0101","0102","1212","2002"], target = "0202"
Output: 6
Explanation: 
A sequence of valid moves would be "0000" -> "1000" -> "1100" -> "1200" -> "1201" -> "1202" -> "0202".
Note that a sequence like "0000" -> "0001" -> "0002" -> "0102" -> "0202" would be invalid,
because the wheels of the lock become stuck after the display becomes the dead end "0102".

EXAMPLE 2:

Input: deadends = ["8888"], target = "0009"
Output: 1
Explanation: We can turn the last wheel in reverse to move from "0000" -> "0009".

EXAMPLE 3:

Input: deadends = ["8887","8889","8878","8898","8788","8988","7888","9888"], target = "8888"
Output: -1
Explanation: We cannot reach the target without getting stuck.
*/

function openLock(deadends, target) {
  const deadendsSet = new Set(deadends)
  if (deadendsSet.has('0000')) return -1

  const visited = new Set()
  visited.add('0000')

  const queue = ['0000']
  let counter = 0

  while (queue.length > 0) {
    const queueLength = queue.length

    for (let i = 0; i < queueLength; i++) {
      const current = queue.shift()

      if (current === target) return counter

      for (let j = 0; j < 4; j++) {
        for (let k = -1; k <= 1; k += 2) {
          const next = current.split('')
          next[j] = (parseInt(next[j]) + k + 10) % 10
          const nextStr = next.join('')

          if (!deadendsSet.has(nextStr) && !visited.has(nextStr)) {
            queue.push(nextStr)
            visited.add(nextStr)
          }
        }
      }
    }

    counter++
  }

  return -1 // if we reach this point, it means we never found the target
}

// --------------------------
// TESTS

console.log(openLock(['0201', '0101', '0102', '1212', '2002'], '0202')) // 6, we can turn the wheels in the following order: '0000' -> '1000' -> '1100' -> '1200' -> '1201' -> '1202' -> '0202'

console.log(openLock([['8888']], '0009')) // 1, we can turn the last wheel in reverse to move from '0000' -> '0009'

console.log(
  openLock(
    ['8887', '8889', '8878', '8898', '8788', '8988', '7888', '9888'],
    '0009'
  )
) // -1, we cannot reach the target without getting stuck
