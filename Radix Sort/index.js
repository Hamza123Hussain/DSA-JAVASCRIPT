function GetDigit(num, postion) {
  return Math.floor((Math.abs(num) / Math.pow(10, postion)) % 10) // it gives number in reverse ordr
}

function DigitCount(num) {
  arr = num.toString() // number converted to string
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= '0' && arr[i] <= '9') {
      // checks if number between valid range
      ++count
    }
  }

  return count
}

// optimized version of digit count
// function DigitCount(num) {
//     if (num === 0) return 1; // Special case for handling 0

//     return Math.floor(Math.log10(Math.abs(num))) + 1;
//   }

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
