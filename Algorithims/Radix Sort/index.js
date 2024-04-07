function GetDigit(num, postion) {
  return Math.floor((Math.abs(num) / Math.pow(10, postion)) % 10) // it gives number in reverse ordr
}

// function DigitCount(num) {
//   arr = num.toString() // number converted to string
//   let count = 0
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= '0' && arr[i] <= '9') {
//       // checks if number between valid range
//       ++count
//     }
//   }

//   return count
// }

// optimized version of digit count
function DigitCount(num) {
  if (num === 0) return 1 // Special case for handling 0

  return Math.floor(Math.log10(Math.abs(num))) + 1
}

function maxdigits(arr) {
  let maxdigits = 0
  for (let i = 0; i < arr.length; i++) {
    maxdigits = Math.max(maxdigits, DigitCount(arr[i]))
  }

  return maxdigits
}

console.log(GetDigit(121313, 2))
console.log(DigitCount(121313))
console.log(maxdigits([121, 2, 22, 111, 5555]))

// Function to perform Radix Sort on an array of numbers
function RadixSort(nums) {
  // Determine the maximum number of digits in the array
  let maxnumberofdigits = maxdigits(nums)

  // Iterate through each digit position from right to left
  for (let k = 0; k < maxnumberofdigits; k++) {
    // Create an array of buckets to hold numbers based on their digit value (0-9)
    const data_buckets = Array.from({ length: 10 }, () => [])

    // Iterate through the numbers in the array
    for (let i = 0; i < nums.length; i++) {
      // Get the kth digit from the right for the current number
      const digit = GetDigit(nums[i], k)

      // Place the number into the corresponding bucket based on its digit value
      data_buckets[digit].push(nums[i])
    }

    // Flatten the array of buckets and update the original array with the sorted numbers
    nums = [].concat(...data_buckets)
  }

  return nums // Return the sorted array
}

console.log(RadixSort([1111, 2, 3, 1, 6, 555, 22, 314134]))

/*Radix Sort is a unique non-comparison sorting algorithm designed to handle integers by sorting them digit by digit,
 starting from the least significant digit (the rightmost) to the most significant digit (the leftmost). 
 This method involves using a stable sorting algorithm, such as counting sort or bucket sort, 
 to arrange the elements based on each digit position.
 Radix Sort operates by iterating through each digit position, 
 nsuring that the numbers are sorted according to that particular digit.
  Notably, Radix Sort achieves a linear time complexity when the number of digits remains constant and
   is independent of the size of the input array.
The time complexity of Radix Sort is expressed as O(d * (n + k)), 
where 'd' represents the number of digits in the largest number, 
'n' is the total number of elements in the input array, and 
'k' denotes the range of digits (typically 10 for decimal numbers). 
Additionally, the space complexity of Radix Sort is outlined as O(n + k), 
where 'n' signifies the number of elements in the input array, and 
'k' represents the range of digits. 
This algorithm's efficiency and linear time complexity make it particularly useful for sorting large datasets efficiently.


*/
