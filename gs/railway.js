

/*



Given arrival and departure times of all trains that reach a 
railway station, the task is to find the minimum number of 
platforms required for the railway station so that no train waits.

We are given two arrays which represent arrival and departure 
times of trains that stop

Input: arr[] = {9:00, 9:40, 9:50, 11:00, 15:00, 18:00}
dep[] = {9:10, 12:00, 11:20, 11:30, 19:00, 20:00}
Output: 3
There are at-most three trains at a time (time between 11:00 to 11:20)

*/


function maxRails(arrivals, departures){
    let n = arrivals.length
    arrivals.sort((a, b) => a - b);
    departures.sort((a, b) => a-b)
    console.log(arrivals)
    console.log(departures)
    let railsNeeded = 1
    let result = 0
    let i = 1
    let j = 0
    while(i < n && j < n){
        if(arrivals[i] <= departures[j]){
            i++
            railsNeeded++
            if (railsNeeded > result) result = railsNeeded;
        }else{
            j++
            railsNeeded--
        }
    }
    return result;
}

let a = [900, 940, 950, 1100, 1500, 1800];
let d = [910, 1200, 1120, 1130, 1900, 2000]
let result = maxRails(a, d)
console.log(result)