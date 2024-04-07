function collectOddValues(arr){
    
    let result = []; // this will store the odd values

    function helper(helperInput){ // this is the helper function, it runs recursivley till base condition
        if(helperInput.length === 0) { // this is base condition
            return;
        }
        
        if(helperInput[0] % 2 !== 0){ // checks for odd
            result.push(helperInput[0])// odd numbers are added
        }
        
        helper(helperInput.slice(1))//  helper function callaes recursively
    }
    
    helper(arr)

    return result; // final array will be returned
}

collectOddValues([1,2,3,4,5,6,7,8,9])