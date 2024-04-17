function sumzero(array) {
  for (let index = 0; index < array.length; index++) {
    for (let i = 0; i < array.length; i++) {
      const sum = array[index] + array[array.length - 1 - i]
      if (sum == 0) {
        return [array[index], array[array.length - 1 - i]]
      }
    }
  }

  return undefined
}

// refactored
// this the best option for calculating sum zero for
// the time complexity is O(N)
function sumzerorefactored(array) {
  let i = 0 // first elment pointer
  let j = array.length - 1 // last element pointer

  while (i <= j) {
    // works until condtion
    const sum = array[i] + array[j]
    if (sum === 0) {
      return [array[i], array[j]] // if sum zero function end
    } else {
      if (sum > 0) {
        j-- // moving end pointer back
      } else {
        ++i // moving start pointer forward
      }
    }
  }
  return undefined
}

console.log(sumzerorefactored([-4, -3, -2, -1, 0, 1, 3, 5, 6, 7, 8]))

function uniquevalues(arr) {
  let count = 0

  let i = 0
  let j = arr.length

  while (i < j) {
    if (arr[i] !== arr[i + 1]) {
      count++
      i++
    } else if (arr[j] !== arr[j - 1]) {
      count++
      j--
    } else {
      i++
      j--
    }
  }

  return count
}

// console.log(uniquevalues([1,2,2,2,2,2,2,2,2,2,3,4,4,5,5,6,6,6,6,6,6,6,7,8,9,10,10,10,10]))

// console.log(uniquevalues([1,2,3,4,4,4,7,7,12,12,13]))
console.log(uniquevalues([1, 1, 1, 1, 1, 1, 1, 1, 2]))
