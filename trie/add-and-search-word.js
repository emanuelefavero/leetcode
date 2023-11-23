// * Add and Search Word - Data Structure design

/*
Design a data structure that supports adding new words and finding if a string matches any previously added string.

Implement the WordDictionary class:

WordDictionary() Initializes the object.
void addWord(word) Adds word to the data structure, it can be matched later.
bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.
*/

/**
 * @typedef {Object} Node
 */

class Node {
  constructor() {
    this.children = {}
    this.end = false
  }
}

/**
 * @typedef {Object} WordDictionary
 */

class WordDictionary {
  constructor() {
    this.root = new Node()
  }

  /**
   * @param {string} word
   * @return {void}
   */

  // O(n)
  addWord(word) {
    let current = this.root

    for (let char of word) {
      if (!current.children[char]) {
        current.children[char] = new Node()
      }

      current = current.children[char]
    }

    current.end = true
  }

  /**
   * @param {string} word
   * @return {boolean}
   */

  // O(n)
  search(word) {
    return this.dfs(word, 0, this.root)
  }

  /**
   * @param {string} word
   * @param {number} index
   * @param {Node} node
   * @returns {boolean}
   */

  // O(n)
  dfs(word, index, node) {
    if (index === word.length) return node.end

    let char = word[index]

    if (char === '.') {
      for (let key in node.children) {
        if (this.dfs(word, index + 1, node.children[key])) return true
      }
    } else {
      if (node.children[char]) {
        return this.dfs(word, index + 1, node.children[char])
      }
    }

    return false
  }
}

// ---------------------------
// TESTS

let wordDictionary = new WordDictionary()
wordDictionary.addWord('bad')
wordDictionary.addWord('dad')
wordDictionary.addWord('mad')
console.log(wordDictionary.search('pad')) // false
console.log(wordDictionary.search('bad')) // true
console.log(wordDictionary.search('.ad')) // true
console.log(wordDictionary.search('b..')) // true
