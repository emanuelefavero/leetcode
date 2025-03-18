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
