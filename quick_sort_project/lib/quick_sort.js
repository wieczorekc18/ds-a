function quickSort(array) {
    if(array.length <= 1) return array;
    let pivot = array.shift();
    let left = array.filter(el => el < pivot);
    let right = array.filter(el => el >= pivot);
    let leftSorted = quickSort(left);
    let rightSorted = quickSort(right);
    
    return leftSorted.concat([pivot].concat(rightSorted))
}


// module.exports = {
//     quickSort
// };

function alarmClock(setTime, timeToSet) {
    let prevMin = setTime.slice(3, 2);
    let nextMin = timeToSet.slice(timeToSet.length - 2, 2);
    // prevMin = parseInt(prevMin);
    // nextMin = parseInt(nextMin);
    console.log(prevMin)
    console.log(nextMin)
}

alarmClock("07:30", "08:00")