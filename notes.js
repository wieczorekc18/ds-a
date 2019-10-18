// function alarmClock(setTime, timeToSet) {
//     let prevMin = setTime.slice(3, 5);
//     let nextMin = timeToSet.slice(3, 5);
//     let prevHr = setTime.slice(0, 2);
//     let nextHr = timeToSet.slice(0, 2);
//     prevMin = parseInt(prevMin);
//     nextMin = parseInt(nextMin);
//     prevHr = parseInt(prevHr);
//     nextHr = parseInt(nextHr);
//     let temp = prevHr;
//     let tempMin = prevMin;
//     let addHrs = 0;
//     while(prevHr !== nextHr){
//         prevHr += 1
//         prevHr = prevHr % 24;
//         addHrs += 1
//     }
//     let subHrs = 0;
//     while (temp !== nextHr) {
//         temp = temp % 24;
//         temp -= 1
//         temp = temp % 24;
//         subHrs += 1
//     }
//     let addMins = 0;
//     while (prevMin !== nextMin) {
//         prevMin += 1
//         prevMin = prevMin % 60;
//         addMins += 1
//     }
    
//     let subMins = 0;
//     while (tempMin !== nextMin) {
//         tempMin -= 1
//         tempMin = tempMin % 60;
//         subMins += 1
//     }
//     let minDiff = Math.min(subMins, addMins)
//     let hrDiff = Math.min(subHrs, addHrs)
//     console.log(minDiff)
//     console.log(hrDiff)
//     return minDiff + hrDiff;
// }
function alarmClock(setTime, timeToSet) {
    let prevMin = setTime.slice(3, 5);
    let nextMin = timeToSet.slice(3, 5);
    let prevHr = setTime.slice(0, 2);
    let nextHr = timeToSet.slice(0, 2);
    prevMin = parseInt(prevMin);
    nextMin = parseInt(nextMin);
    prevHr = parseInt(prevHr);
    nextHr = parseInt(nextHr);
    let hrSum = prevHr + nextHr;
    let hrDiff = Math.abs(prevHr - nextHr)
    if(hrSum > 24){
        hrDiff = hrSum - 24;
    }
    console.log(hrDiff)
}

alarmClock("23:45", "011:00")
