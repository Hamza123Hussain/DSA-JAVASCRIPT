// this is the simple method to check if arr1's elements sqaure exist in arr2 or not
// this method is not preffered as its time complexity is high
// becuase the index of method take time complexity of 0(N square)

function simplesqaurelementscheck(arr1, arr2) {
  let count = 0 // this variable will determine the result of the function

  if (arr1.length !== arr2.length) {
    // if both strings are not of same length then false
    return false
  }

  for (let ele of arr1) {
    // iterating through each element of the array1

    const currentelement = arr2.indexOf(ele ** 2) // checking if the square of each element exists in
    // the second array
    if (currentelement !== -1) {
      // this checks if the element exists
      // arr2.splice(currentelement,1) // removing the element from the array
      ++count // incrementing count as each item matches its square
    }
  }

  // if (arr2.length==0){// // if array2 is empty means all the elements are squaure of the array 1 elementd
  //   return true
  // }
  // else{
  //   return false;
  // }

  if (arr2.length == count) {
    // checks if the count is equal to length of array means all the elements are matched
    return true
  } else {
    return false
  }
}

console.log(simplesqaurelementscheck([3, 2, 1], [1, 4, 9]))

// refactored version of anagram
//0(n) time complexity as no nested loops used
// much more effeicent after refactored
//simplier to undertsand too
// Function to check if two arrays represent anagrams of each other
function anagram(arr1, arr2) {
  // Check if the lengths of both arrays are equal
  if (arr1.length !== arr2.length) {
    // if both strings are not of same length then false
    return false
  }

  // Initialize frequency objects for both arrays
  let object1 = {}
  let object2 = {}

  // Populate frequency object for arr1
  for (let ele of arr1) {
    // of is used for arrays
    // Add data to object1
    object1[ele] = object1[ele] > 0 ? ++object1[ele] : 1
  }

  // Populate frequency object for arr2
  for (let ele of arr2) {
    // adding data to second object
    object2[ele] = object2[ele] > 0 ? ++object2[ele] : 1
  }

  // Compare frequency objects
  for (let key in object2) {
    // in is used for objects
    // Check if the current character exists in both objects
    if (!(key in object1)) {
      // checks if the given character exists in both objects or not
      return false
    }

    // Check if both objects have the same frequency of the current character
    if (object1[key] !== object2[key]) {
      // checks if the both have the same frequency of each character
      return false
    }
  }

  // If all characters have identical frequencies, return true (arrays are anagrams)
  return true
}

// Example usage:
console.log(anagram(['r', 'a', 'c'], ['c', 'a', 'r'])) // Output: true
