// * Destination City

/*
You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.

It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.
*/

// TIP: The destination city never appears on the left of the array so we will create a set with all left cities and then check which right city does not appear on the left by checking which right city is not found in the set

/**
 *
 * @param {string[][]} paths
 * @returns {string}
 */

// O(n) time | O(n) space
function destCity(paths) {
  if (paths.length === 1) return paths[0][1]

  const set = new Set()

  // Add all left cities to the set
  for (const path of paths) {
    set.add(path[0])
  }

  // Check which right city does not appear on the left
  for (const path of paths) {
    const rightCity = path[1]
    if (!set.has(rightCity)) return rightCity
  }
}

// -----------------------------
// TESTS

console.log(
  destCity([
    ['London', 'New York'],
    ['New York', 'Lima'],
    ['Lima', 'Sao Paulo'],
  ])
) // Sao Paulo
// Explanation: Starting at "London" city you will reach "Sao Paulo" city which is the destination city. Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".
