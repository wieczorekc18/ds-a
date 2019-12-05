

function minDiff(arr, k){
    
    arr.sort(function(a,b){return a > b})

    return arr
}

function diff(array){
    array.sort(function (a, b) { return a > b })
    return Math.abs(array[0] - array[array.length-1])
}

let a = [1, 15, 10]
let k = 6
let res = minDiff(a, k)
console.log(res)
console.log(a)
