// TODO: rename this file from '.txt' to '.js'
function isPalindrome(str) {
  if (str===undefined || str===null || typeof str !== 'string') {
    return console.log(`The given value: ${str} is not a string! The expected data type of the value is string`)
  }

  let a = []
  for (let i=str.length-1; i>=0 ; i--) {
    a.push(str.charAt(i))
  }
  if (str.toUpperCase() === a.join('').toUpperCase()) {
    return console.log(`The given string: ${str} is an example of a palindrome, the reversed value is: ${a.join('')}`)
  } else if (str.toUpperCase() !== a.join('').toUpperCase()) {
    return console.log(`The given string: ${str} is not an example of a palindrome`)
  }
}

// Call the function and pass an argument.
isPalindrome(true)
