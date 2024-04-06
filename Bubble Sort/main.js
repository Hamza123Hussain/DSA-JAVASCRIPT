function TheOrignalBubblesort(arr) {
  for (let index = 0; index <= arr.length - 1; index++) {
    for (let j = 0; j <= arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

//  This is a optimized version of bubble sort as it reduces the number of swaps
function bubbleSort(arr) {
  for (let index = arr.length - 1; index >= 0; index--) {
    // by reducing the array length everytime
    // we make sure that the number of swaps done are reduced
    for (let j = 0; j <= index; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

// Example usage:
const arr = [64, 34, 25, 12, 22, 11, 1]
console.log(bubbleSort(arr)) // Output: [11, 12, 22, 25, 34, 64, 90]
