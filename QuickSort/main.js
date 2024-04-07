// Function to partition the array around a pivot element
/// By choosing the pivot as the median value, it takes less time for the code to finish
function pivot(arr, start = Math.floor(arr.length / 2), end = arr.length - 1) {
  let pivotValue = arr[start] // Select pivot element as the first element
  let swapid = start // Initialize swap index to start

  // Function to swap two elements in the array
  function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }

  // Iterate through the array from start+1 to end
  for (let i = start + 1; i <= end; i++) {
    if (pivotValue > arr[i]) {
      // If current element is less than pivot
      swapid++ // Increment swap index
      swap(arr, i, swapid) // Swap current element with element at swap index
    }
  }

  swap(arr, start, swapid) // Swap pivot element with element at swap index to place pivot in its correct position
  return swapid // Return the index of the pivot element after partitioning
}

// Function to recursively sort the array using quicksort algorithm
function quicksort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    // Base case: if left pointer is less than right pointer
    let pivotindex = pivot(arr, left, right) // Partition the array and get pivot index
    quicksort(arr, left, pivotindex - 1) // Recursively sort the left partition
    quicksort(arr, pivotindex + 1, right) // Recursively sort the right partition
  }

  return arr // Return the sorted array
}

// Example usage of quicksort function with an unsorted array
console.log(quicksort([3, 2, 1, 0, 5, 4, 6, 0]))
