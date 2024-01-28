// * Count Items Matching a Rule

/*
You are given an array items, where each items[i] = [type i, colori, name i] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

The ith item is said to match the rule if one of the following is true:

ruleKey == "type" and ruleValue == type i.
ruleKey == "color" and ruleValue == colori.
ruleKey == "name" and ruleValue == name i.
Return the number of items that match the given rule.
*/

/**
 * @param {string[][]} items
 * @param {string}} ruleKey
 * @param {string} ruleValue
 * @returns {number}
 */

// O(n) time | O(1) space
function countMatches(items, ruleKey, ruleValue) {
  let count = 0
  let hash = {
    type: 0,
    color: 1,
    name: 2,
  }
  let key = hash[ruleKey]

  for (let item of items) {
    if (item[key] === ruleValue) count++
  }

  return count
}

// -----------------------------
// TESTS

console.log(
  countMatches(
    [
      ['phone', 'blue', 'pixel'],
      ['computer', 'silver', 'lenovo'],
      ['phone', 'gold', 'iphone'],
    ],
    'color',
    'silver'
  )
) // 1
// Explanation: There is only one item matching the given rule, which is ["computer","silver","lenovo"]

console.log(
  countMatches(
    [
      ['phone', 'blue', 'pixel'],
      ['computer', 'silver', 'phone'],
      ['phone', 'gold', 'iphone'],
    ],
    'type',
    'phone'
  )
) // 2
// Explanation: There are only two items matching the given rule, which are ["phone","blue","pixel"] and ["phone","gold","iphone"]. Note that the item ["computer","silver","phone"] does not match.
