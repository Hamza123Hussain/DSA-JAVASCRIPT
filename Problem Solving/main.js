// Problem : count how many time each character has occured in the string

// simple code
function charcount(str) {
  let result = {}
  for (let index = 0; index < str.length; index++) {
    const element = str[index]
    if (element == ' ' || element == '.') {
      return result
    } else if (
      (element >= '0' && element <= '9') ||
      (element >= 'a' && element <= 'z')
    ) {
      if (result[element] > 0) {
        result[element]++
      } else {
        result[element] = 1
      }
    }
  }
  return result
}

// code after being refactored
function Refactored_charcount(str) {
  let result = {}
  for (char of str) {
    char = char.toLowerCase()
    if (check_if_alphabet_and_number(char)) {
      result[char] > 0 ? result[char]++ : (result[char] = 1)
    }
  }
  return result
}

function check_if_alphabet_and_number(element) {
  return (
    (element >= '0' && element <= '9') || (element >= 'a' && element <= 'z')
  )
}

console.log(Refactored_charcount('hamza11128128...............'))

// //*Both codes have the same time complexity of O(n) because they iterate through the input string once.
// However, the space complexity is also O(n) for both codes, with a slight overhead in the refactored code
// due to the additional function.
//  Overall, both codes are efficient in terms of time and space complexity,
//   but the refactored code may be considered more readable and maintainable due to its modular structure.
