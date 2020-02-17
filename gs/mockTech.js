/**
 * 

Given a range of numbers [l, r] and an integer q. 
The task is to count all such number in the given range 
such that any digit of the number does not match with any digit 
in its product with the given number q.

*/


function digitMatching(range, q){
    let start = range[0];
    let end = range[1];
    let current = start;
    let matchingNums = []; // change this to a counter for O(1)
    while(current <= end){
        let numberFits = true;
        let currentStr = current + "";
        let strArr = currentStr.split("");
        let product = q*current;
        let productStr = product+"";
        for(let i = 0; i<strArr.length; i++){
            if(productStr.includes(strArr[i])){
                numberFits = false;
            }
        }
        if(numberFits){
            matchingNums.push(current);
        }
        current++;
    }
    return matchingNums.length;
}

let range = [10, 12];
let q = 2;
// console.log(digitMatching(range, q))

// O(n*m)
// where n is the range 
// and m is the length of the largest string
// O(n) where n is the number of matches


function strangeSort(map, nums){
    let mappedNums = [];
    let mappedErrors = {};
    for(let i = 0; i < nums.length; i++){
        let currentString = nums[i];
        let stringStruct = "";
        for(let j = 0; j<currentString.length; j++){
            let currentNum = currentString[j];
            currentNum = parseInt(currentNum);
            let correctNum = map.indexOf(currentNum);
            stringStruct += correctNum;
        }
        let finalNum = parseInt(stringStruct);
        mappedNums.push(finalNum)
        mappedErrors[finalNum] = [].push(nums[i]);
    }
    let sortedMappedNums = mappedNums.sort((a,b)=> a-b)
    
    return sortedMappedNums
}
