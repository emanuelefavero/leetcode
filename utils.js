/**
 * Compare the time taken to execute two different functions
 *
 * @param {Function} fn
 * @param  {...any} args
 * @returns {string}
 * @example time(() => sum(1, 2)) // 0.0001ms
 */

export function time(fn, ...args) {
  const start = performance.now()
  fn(...args)
  const end = performance.now()
  return `${(end - start).toFixed(4)}ms`
}

/* 
TIP: You can also use `console.time` and `console.timeEnd` to measure the time taken to execute a function:
console.time('sum')
sum(1, 2)
console.timeEnd('sum') // sum: 0.0001ms
*/
