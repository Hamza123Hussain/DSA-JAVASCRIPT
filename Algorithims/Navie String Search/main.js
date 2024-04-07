// This is a long yet simplifed version of the searching substrings in a string
function stringsearch(mainstring, searchelement) {
  let count = 0 // Initialize count to 0

  for (let i = 0; i < mainstring.length; i++) {
    let j = 0 // Initialize j to 0 at each iteration of i

    while (j < searchelement.length) {
      // Check if characters match and both strings have characters left to compare
      if (searchelement[j] === mainstring[i + j]) {
        j++ // Increment j to move to the next character in searchelement as a character is matched
      } else {
        break // Break the loop if characters don't match
      }

      // If j reaches the end of searchelement, increment count
      if (j === searchelement.length) {
        // this means the subtring match is found
        count++
      }
    }
  }

  return count
}

// This is A much Optimized and Simplified Version of Finding Substrings in a String
function stringSearch(mainstring, searchelement) {
  let count = 0 // Initialize count to 0

  for (let i = 0; i <= mainstring.length; i++) {
    if (mainstring.substring(i, i + searchelement.length) === searchelement) {
      // the substring function takes in the starting index and the ending index
      // If the substring of mainstring matches searchelement, increment count
      count++
    }
  }

  return count
}

console.log(stringsearch('iammanrmanjjjjman', 'man')) // Output: 1

console.log(stringSearch('manmanmanman', 'man'))
