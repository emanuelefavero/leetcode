// * Take Gifts From the Richest Pile

/*
You are given an integer array gifts denoting the number of gifts in various piles. Every second, you do the following:

- Choose the pile with the maximum number of gifts.
- If there is more than one pile with the maximum number of gifts, choose any.
- Reduce the number of gifts in the pile to the floor of the square root of the original number of gifts in the pile.

Return the number of gifts remaining after k seconds.
*/

function pickGifts(gifts, k) {
  for (let i = 0; i < k; i++) {
    gifts = gifts.sort((a, b) => b - a)

    gifts[0] = Math.floor(Math.sqrt(gifts[0]))
  }

  return gifts.reduce((num, acc) => num + acc, 0)
}

// -------------------------
// TESTS

console.log(pickGifts([25, 64, 9, 4, 100], 4)) // 29
/*
Explanation: 
The gifts are taken in the following way:
- In the first second, the last pile is chosen and 10 gifts are left behind.
- Then the second pile is chosen and 8 gifts are left behind.
- After that the first pile is chosen and 5 gifts are left behind.
- Finally, the last pile is chosen again and 3 gifts are left behind.
The final remaining gifts are [5,8,9,4,3], so the total number of gifts remaining is 29.
*/
