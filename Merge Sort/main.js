function merge(arr1, arr2) {
  let i,
    j = 0
  let results = []
  while (i <= arr1.length && j <= arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i])
      i++
    } else {
      results.push(arr2[j])
      j++
    }

    while (i <= arr1.length) {
      results.push(arr1[i])
      i++
    }
    while (j <= arr2.length) {
      results.push(arr2[j])
      j++
    }
  }

  return results
}

function mergesort(arr) {
  if (arr.length <= 1) return arr
  let middle = Math.floor(arr.length / 2)
  let left = mergesort(arr.slice(0, middle))
  let right = mergesort(arr.slice(middle))

  merge(left, right)
}

console.log(mergesort([3, 2, 16, 21, 1, 5, 0]))
