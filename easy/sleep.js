// * Sleep

// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

async function sleep(ms) {
  return new Promise((res) => setTimeout(res, ms))
}

// ----------------------
// TESTS

let t = Date.now()
sleep(100).then(() => console.log(Date.now() - t)) // 100
