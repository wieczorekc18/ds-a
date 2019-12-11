
// find median of two sorted arrays


// doesn't quite work

function median(a, b){
    let totalLength = a.length+b.length
    if(totalLength <= 1){
        if(a[0]){
            return a[0]
        }else if(b[0]){
            return b[0]
        }else{
            return undefined
        }
    }
    let endPoint;
    if(totalLength % 2 == 1){
        endPoint = Math.floor((totalLength+1)/2)
    }else{
        endPoint = Math.floor((totalLength) / 2);
    }
    let i = 0;
    let j = 0;
    let k = 0;
    let median;
    let next
    while(i <= endPoint){
        if(i < endPoint){

            if (a[j] < b[k] || isNaN(b[k])) {
                median = a[j];
                j++;
            } else {
              median = b[k];
              k++;
            }
            
        }else{
            if (a[j] < b[k] || isNaN(b[k])) {
              next = a[j];
              j++;
            } else {
              next = b[k];
              k++;
            }
        }
        i++
    }
    if (totalLength % 2 == 1) {
      return median
    } else {
      return (median + next) /2 // not valid
    }
}

let array = [-2, -1, 1, 4, 9]
let barray = [-9, -8, -7, -6, -5, -3, 5, 6, 9]

console.log(median(array, barray))
let aa = array.concat(barray)
// console.log(aa);
// aa.sort((a, b) => a-b )
// console.log(aa)

let c = [2, 3]
let d = []

console.log(median(c, d));
