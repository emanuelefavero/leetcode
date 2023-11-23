/**
 * @typedef {Object} Node
 */

class Node {
  constructor() {
    this.children = {}
  }
}

/**
 * @typedef {Object} Trie
 */

class Trie {
  constructor() {
    this.root = new Node()
  }

  /**
   * @param {string} word
   * @return {void}
   */

  // O(n)
  insert(word) {
    let current = this.root

    for (let char of word) {
      if (!current.children[char]) {
        current.children[char] = new Node()
      }

      current = current.children[char]
    }

    current.isWord = true
  }

  /**
   * @param {string} word
   * @returns {boolean}
   */

  // O(n)
  search(word) {
    let current = this.root

    for (let char of word) {
      if (!current.children[char]) return false
      current = current.children[char]
    }

    return current.isWord === true
  }

  /**
   * @param {string} prefix
   * @returns {boolean}
   */

  // O(n)
  startsWith(prefix) {
    let current = this.root

    for (let char of prefix) {
      if (!current.children[char]) return false
      current = current.children[char]
    }

    return true
  }
}

// -----------------------------
// TESTS

let trie = new Trie()
trie.insert('apple')
console.log(trie.search('apple')) // true
console.log(trie.search('app')) // false
console.log(trie.startsWith('app')) // true
trie.insert('app')
console.log(trie.search('app')) // true

/*
Trie example:
{
  root: {
    a: {
      p: {
        p: {
          l: {
            e: {
              isWord: true
            }
          }
        }
      }
    }
  }
}
*/
