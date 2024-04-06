function number_compare(num1,num2){
    return num1- num2 // if + then num1 moves forward and num 2 takes postion of num1
}

let arr=[13,4,15,2,1]
arr.sort(number_compare) // what this does is that
//it checks if the value of previous is less or greater than the next element and then sorts accordingly

console.log(arr)