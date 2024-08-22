// * Design an Ordered Stream

/*
There is a stream of n (idKey, value) pairs arriving in an arbitrary order, where idKey is an integer between 1 and n and value is a string. No two pairs have the same id.

Design a stream that returns the values in increasing order of their IDs by returning a chunk (list) of values after each insertion. The concatenation of all the chunks should result in a list of the sorted values.

Implement the OrderedStream class:

OrderedStream(int n) Constructs the stream to take n values.
String[] insert(int idKey, String value) Inserts the pair (idKey, value) into the stream, then returns the largest possible chunk of currently inserted values that appear next in the order.
*/

/**
 * @param {number} n
 */

class OrderedStream {
  constructor(n) {
    this.list = new Array(n)
    this.pointer = 0
  }

  /**
   * @param {number} idKey
   * @param {string} value
   * @returns {string[]}
   */

  // O(n) time | O(n) space
  insert(idKey, value) {
    let chunk = []
    this.list[idKey - 1] = value // idKey is 1-based, so we need to subtract 1

    while (this.list[this.pointer]) {
      chunk.push(this.list[this.pointer])
      this.pointer++
    }

    return chunk
  }
}

// -------------------
// TESTS

const os = new OrderedStream(5)
const chunk1 = os.insert(3, 'ccccc') // []
const chunk2 = os.insert(1, 'aaaaa') // ['aaaaa']
const chunk3 = os.insert(2, 'bbbbb') // ['bbbbb', 'ccccc']
const chunk4 = os.insert(5, 'eeeee') // []
const chunk5 = os.insert(4, 'ddddd') // ['ddddd', 'eeeee']

// Concatenation of all the chunks returned:
console.log([...chunk1, ...chunk2, ...chunk3, ...chunk4, ...chunk5])
// ['aaaaa', 'bbbbb', 'ccccc', 'ddddd', 'eeeee']
