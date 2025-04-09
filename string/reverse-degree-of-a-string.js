// * Reverse Degree of a String

/*
Given a string s, calculate its reverse degree.

The reverse degree is calculated as follows:

1. For each character, multiply its position in the reversed alphabet ('a' = 26, 'b' = 25, ..., 'z' = 1) with its position in the string (1-indexed).
2. Sum these products for all characters in the string.

Return the reverse degree of s.
*/

function reverseDegree(s) {
  let map = {
    a: 26,
    b: 25,
    c: 24,
    d: 23,
    e: 22,
    f: 21,
    g: 20,
    h: 19,
    i: 18,
    j: 17,
    k: 16,
    l: 15,
    m: 14,
    n: 13,
    o: 12,
    p: 11,
    q: 10,
    r: 9,
    s: 8,
    t: 7,
    u: 6,
    v: 5,
    w: 4,
    x: 3,
    y: 2,
    z: 1,
  }

  let result = 0
  for (let i = 0; i < s.length; i++) {
    let char = s[i]

    // Multiply the map value of the character by its index (1-indexed)
    result += map[char] * (i + 1)
  }

  return result
}

// -------------------------
// TESTS

console.log(reverseDegree('abc')) // 148
/*
Explanation:

| Letter | Index in Reversed Alphabet  | Index in String  | Product |
|--------|-----------------------------|------------------|---------|
| 'a'    | 26                          | 1                | 26      |
| 'b'    | 25                          | 2                | 50      |
| 'c'    | 24                          | 3                | 72      |

The reversed degree is 26 + 50 + 72 = 148.
*/
