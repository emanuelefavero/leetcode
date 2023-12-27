// * Defanging an IP Address

// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

// TIP: THis solution uses regex

function defangIPaddr(address) {
  return address.replace(/\./g, '[.]')
}

// -----------------------------
// SOLUTION 2

function defangIPaddr2(address) {
  return address.replaceAll('.', '[.]')
}

// -----------------------------
// SOLUTION 3

function defangIPaddr3(address) {
  return address.split('.').join('[.]')
}

// -----------------------------
// SOLUTION 4

// TIP: This solution doesn't use JavaScript built in methods but is less efficient memory wise and longer to read

// TODO jsDoc

function defangIPaddr4(address) {
  let result = ''

  for (let char of address) {
    if (char === '.') {
      result += '[.]'
    } else {
      result += char
    }
  }

  return result
}

// -----------------------------
// TESTS

// 1
console.log(defangIPaddr('255.100.50.0')) // '255[.]100[.]50[.]0'

// 2
console.log(defangIPaddr2('255.100.50.0')) // '255[.]100[.]50[.]0'

// 3
console.log(defangIPaddr3('255.100.50.0')) // '255[.]100[.]50[.]0'

// 4
console.log(defangIPaddr4('255.100.50.0')) // '255[.]100[.]50[.]0'
