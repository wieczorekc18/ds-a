
// smallest sub array whose sum is >= to target



// Find the smallest subarray length with target 
// more than or equal to the sum of the subarray.
// The numbers are non sorted.
// Return - 1 if not possible.


function smallSub(array, target){
    array.sort((a,b)=> a > b)
    let sum = 0
    let length = 0
    for(let i = array.length-1; i >= 0; i--){
        sum += array[i]
        length++
        if(sum >= target){
            return length;
        }
    }
    return -1
}









function smallestSub(array, target){
    array.sort((a,b)=>a-b)
    console.log(array)
    let length = 0;
    let sum = 0;
    for(let i = array.length-1; i>=0; i--){
        sum+=array[i];

        length++
        if(sum >= target){
            return length;
        }
    }
    return -1;
}

let arr = [-50, -900, -1, 3, 1, 2, 4, -4, -30, 1, 0]
let tar = 6
let t = 12
console.log(smallestSub(arr, tar))

let string = "hello"



/*
    Given an array of n positive integers and a positive integer s, 
    find the minimal length of a contiguous subarray 
    of which the sum ≥ s.
    If there isn't one, return 0 instead.

    Example:

    Input: s = 7, nums = [2, 3, 1, 2, 4, 3]
    Output: 2
    Explanation: the subarray[4, 3] has the minimal length 
    under the problem constraint.

*/

function smallContSub(array, target){
    let left = 0, right = 0, sum = 0, min = Infinity

    while(right < array.length){
        sum += array[right]
        if(sum >= target){
            while(sum>=target){
                sum -= array[left]
                left++
            }
            min = Math.min(min, right-left+2)
        }
        right++
    }

    return min === Infinity ? -1 : min
}

let nums = [2, 3, 1, 2, 4, 3]
let s = 7

console.log(smallContSub(nums, s))


