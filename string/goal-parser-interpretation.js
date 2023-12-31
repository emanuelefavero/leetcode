// * Goal Parser Interpretation

/*
You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

Given the string command, return the Goal Parser's interpretation of command.
*/

/**
 * @param {string} command
 * @returns {string}
 */

// O(n) time | O(1) space
function interpret(command) {
  let result = ''

  for (let i = 0; i < command.length; i++) {
    if (command[i] === 'G') result += 'G'

    if (command[i] === '(') {
      if (command[i + 1] === ')') result += 'o'
      else result += 'al'
    }
  }

  return result
}

// -----------------------------
// SOLUTION 2

// TIP: This solution uses built in methods. The split() method splits a String into an array by a specific separator. The join() method joins all elements of an array into a string. The argument passed to the join() method is the string that will be used between joined elements of the array

function interpret2(command) {
  return command.split('()').join('o').split('(al)').join('al')
}

// -----------------------------
// SOLUTION 3

// TIP: This solution uses regex

// TODO link to README

function interpret3(command) {
  return command.replace(/\(\)/g, 'o').replace(/\(al\)/g, 'al')
}

// -----------------------------
// TESTS

// 1
console.log(interpret('G()(al)')) // 'Goal'
console.log(interpret('G()()()()(al)')) // 'Gooooal'

// 2
console.log(interpret2('G()(al)')) // 'Goal'
console.log(interpret2('G()()()()(al)')) // 'Gooooal'

// 3
console.log(interpret3('G()(al)')) // 'Goal'
console.log(interpret3('G()()()()(al)')) // 'Gooooal'
