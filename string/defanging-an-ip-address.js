// * Defanging an IP Address

// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

// TODO jsDoc

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
// TESTS

// 1
console.log(defangIPaddr('255.100.50.0')) // '255[.]100[.]50[.]0'

// 2
console.log(defangIPaddr2('255.100.50.0')) // '255[.]100[.]50[.]0'
