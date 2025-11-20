// * Unique Email Addresses

/*
Every valid email consists of a local name and a domain name, separated by the '@' sign. Besides lowercase letters, the email may contain one or more '.' or '+'.

- For example, in "alice@leetcode.com", "alice" is the local name, and "leetcode.com" is the domain name.

If you add periods '.' between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name. Note that this rule does not apply to domain names.

- For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.

If you add a plus '+' in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered. Note that this rule does not apply to domain names.

- For example, "m.y+name@email.com" will be forwarded to "my@email.com".

It is possible to use both of these rules at the same time.

Given an array of strings emails where we send one email to each emails[i], return the number of different addresses that actually receive mails.
*/

function numUniqueEmails(emails) {
  const set = new Set()
  const at = '@'

  for (const email of emails) {
    // Split the email into local and domain parts
    const [localName, domainName] = email.split(at)

    // Split the local name at the first '+' and take the part before it
    const splitAtPlus = localName.split('+')
    const localWithoutPlus = splitAtPlus[0]

    // Remove all '.' characters from the local name
    const noDotsLocal = localWithoutPlus.replace(/\./g, '')

    // Reconstruct the processed email address
    const cleanEmail = `${noDotsLocal}${at}${domainName}`

    // Add the processed email to the set
    set.add(cleanEmail)
  }

  return set.size
}

// -------------------------
// SOLUTION 2

// TIP: This combines steps for a more concise approach.

function numUniqueEmails2(emails) {
  const set = new Set()

  for (const email of emails) {
    let [local, domain] = email.split('@') // Split email
    local = local.split('+')[0].replace(/\./g, '') // Clean local part
    set.add(`${local}@${domain}`) // Reconstruct and add to set
  }

  return set.size
}

// -------------------------
// TESTS

// 1
console.log(
  numUniqueEmails([
    'test.email+alex@leetcode.com',
    'test.e.mail+bob.cathy@leetcode.com',
    'testemail+david@lee.tcode.com',
  ])
) // 2
// Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails

// 2
console.log(
  numUniqueEmails2([
    'test.email+alex@leetcode.com',
    'test.e.mail+bob.cathy@leetcode.com',
    'testemail+david@lee.tcode.com',
  ])
) // 2
