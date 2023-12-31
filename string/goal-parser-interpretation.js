// * Goal Parser Interpretation

/*
You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

Given the string command, return the Goal Parser's interpretation of command.
*/

function interpret(command) {
  let result = ''

  current = 0

  while (current < command.length) {
    if (command[current] === '(') {
      if (command[current + 1] === ')') {
        result += 'o'
        current++
      } else {
        result += 'al'
        current += 3
      }
    } else {
      result += 'G'
    }

    current++
  }

  return result
}

// -----------------------------
// TESTS

console.log(interpret('G()(al)')) // 'Goal'
console.log(interpret('G()()()()(al)')) // 'Gooooal'
