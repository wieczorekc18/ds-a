function merge(array1, array2) {
    let merged = [];
    while(array1.length || array2.length){
        let firstOne = array1.length ? array1[0] : Infinity
        let firstTwo = array2.length ? array2[0] : Infinity
        let next
        if(firstOne < firstTwo){
            next = array1.shift();
        }else{
            next = array2.shift();
        }
        merged.push(next)
    }
    return merged
}

function mergeSort(array) {
    if(array.length <= 1) return array;
    let midIndex = Math.floor(array.length/2)
    let left = array.slice(0, midIndex);
    let right = array.slice(midIndex);
    let sortedLeft = mergeSort(left);
    let sortedRight = mergeSort(right);
    return merge(sortedLeft, sortedRight);
}

module.exports = {
    merge,
    mergeSort
};