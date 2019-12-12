
// smallest sub array whose sum is >= to target

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