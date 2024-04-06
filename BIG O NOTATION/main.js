function addup(n){
    let sum=0;
    for (let index = 1; index <= n; index++) {
        sum+=index
        
    }

    return sum
}

function addup2(n){
    return (n*(n+1))/2 // this one seems to be more efficient as
    //it is taking less to time to execute
    
}

// however time is not the best method to decicde to use which algothrim
// as time is measured differenly on each machine



function twoloops(n){ // this is 0(n sqaure) as there is a loop inside a loop thus 0(N) * 0(N) = 0(N SQUARE)
    for (let index = 0; index <=n; index++) {
        for (let i = 0; i <=n; i++) {
            // console.log(index, i)
            
        }
        
    }
}


const time1= performance.now()

console.log( twoloops(30000))
const time2=performance.now()

console.log(`TIME DIFFERENCE : ${(time2-time1)/1000} Seconds`)