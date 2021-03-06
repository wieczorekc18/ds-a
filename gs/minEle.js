
function minimumEle(arr){
    if(arr.length == 0) return;
    let mid = Math.floor(arr.length/2)
    let last = arr[arr.length-1];
    if(arr[mid-1]>arr[mid]) return arr[mid] 
    if(arr[mid] > arr[mid+1]) return arr[mid+1]
    if(arr[mid] < last){
        return minEle(arr.slice(0, mid))
    }else{
        return minEle(arr.slice(mid+1))
    }

    
}

function minEle(array){
    if(array.length <=1) return array[0]
    let mid = Math.floor(array.length/2)
    if(array[mid] > array[mid+1]) return array[mid+1];
    if (array[mid-1] > array[mid]) return array[mid]
    if(array[mid] > array[array.length -1]){
        return minEle(arr.slice(0, mid))
    } else {
        return minEle(arr.slice(mid + 1))
    }
}

let arr = [5, 6, 2, 3, 4]
console.log(minEle(arr))