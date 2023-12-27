// * Defanging an IP Address

// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

// TODO jsDoc

function defangIPaddr(address) {
  return address.replace(/\./g, '[.]')
}

// -----------------------------
// TESTS

console.log(defangIPaddr('1.1.1.1')) // '1[.]1[.]1[.]1'
console.log(defangIPaddr('255.100.50.0')) // '255[.]100[.]50[.]0'
