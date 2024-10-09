// * Number of Changing Keys

/*
You are given a 0-indexed string s typed by a user. Changing a key is defined as using a key different from the last used key. For example, s = "ab" has a change of a key while s = "bBBb" does not have any.

Return the number of times the user had to change the key.

Note: Modifiers like shift or caps lock won't be counted in changing the key that is if a user typed the letter 'a' and then the letter 'A' then it will not be considered as a changing of key.
*/

function countKeyChanges(s) {
  let count = 0

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i].toLowerCase() !== s[i + 1].toLowerCase()) count++
  }

  return count
}

// -------------------------
// SOLUTION 2

// TIP: We could also convert the string (s) to lowercase first

function countKeyChanges2(s) {
  s = s.toLowerCase()
  let count = 0

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] !== s[i + 1]) count++
  }

  return count
}

// -------------------------
// SOLUTION 3

// TIP: The following solution it's a good example of how to solve the problem using two pointers

function countKeyChanges3(s) {
  s = s.toLowerCase()
  let count = 0
  let previous = 0
  let current = 1

  while (current < s.length) {
    if (s[previous] !== s[current]) count++

    previous = current
    current++
  }

  return count
}

// -------------------------
// TESTS

// 1
console.log(countKeyChanges('aAbBcC')) // 2
/*
Explanation: 
From s[0] = 'a' to s[1] = 'A', there is no change of key as caps lock or shift is not counted.
From s[1] = 'A' to s[2] = 'b', there is a change of key.
From s[2] = 'b' to s[3] = 'B', there is no change of key as caps lock or shift is not counted.
From s[3] = 'B' to s[4] = 'c', there is a change of key.
From s[4] = 'c' to s[5] = 'C', there is no change of key as caps lock or shift is not counted.
*/

// 2
console.log(countKeyChanges2('aAbBcC')) // 2

// 3
console.log(countKeyChanges3('aAbBcC')) // 2
