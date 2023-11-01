// * Keys and Rooms

/*
There are n rooms labeled from 0 to n - 1 and all the rooms are locked except for room 0. Your goal is to visit all the rooms. However, you cannot enter a locked room without having its key.

When you visit a room, you may find a set of distinct keys in it. Each key has a number on it, denoting which room it unlocks, and you can take all of them with you to unlock the other rooms.

Given an array rooms where rooms[i] is the set of keys that you can obtain if you visited room i, return true if you can visit all the rooms, or false otherwise.
*/

/**
 * @param {number[][]} rooms
 * @returns {boolean}
 */

// TIP: This solution uses a stack (depth-first search)

// O(n) time | O(n) space
function canVisitAllRooms(rooms) {
  let visited = new Set()
  let stack = [0] // start with room 0

  while (stack.length > 0) {
    let current = stack.pop()

    if (!visited.has(current)) {
      visited.add(current)
      stack.push(...rooms[current]) // the spread operator is used to push the elements of the nested array into the stack
    }
  }

  return visited.size === rooms.length
}

// --------------------------
// SOLUTION 2

// TIP: This solution uses Depth First Search (DFS) and recursion

function canVisitAllRooms2(rooms) {
  let visited = new Set()

  function DFS(rooms, i) {
    if (visited.has(i)) return

    visited.add(i)

    for (let j = 0; j < rooms[i].length; j++) {
      DFS(rooms, rooms[i][j])
    }
  }

  DFS(rooms, 0)

  return visited.size === rooms.length
}

// --------------------------
// TESTS

console.log(canVisitAllRooms([[1], [2], [3], []])) // true
/*
We visit room 0 and pick up key 1.
We then visit room 1 and pick up key 2.
We then visit room 2 and pick up key 3.
We then visit room 3.
Since we were able to visit every room, we return true.
*/

console.log(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]])) // false
// Explanation: We can not enter room number 2 since the only key that unlocks it is in that room.
