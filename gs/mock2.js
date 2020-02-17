

/**

    Given and integer K and an array heights[] where height[i]
    is the height of the ith tree in a forest. make a cut X 
    (where X is an integer) 
    such that exactly K unit(s) of wood are collected

 */


// take max element of the array
// set this equal to x
// decrement x until sum total of wood becomes >= k

function treeCutter(k, heights){
    let x = Math.max(...heights)
    let totalWood = 0;
    while(totalWood <= k && x >= 0){
        for(let i = 0; i < heights.length; i++){
            if ((heights[i] - x) > 0){
                totalWood += (heights[i] - x)
            }
        }
        if(totalWood == k){
            return x;
        }else if(totalWood > k){
            totalWood = 0
        }
        x--;
    }

    return -1;
}

let k = 2

let heights = [1,2,1,2]

console.log(treeCutter(k, heights))

let j = 1


console.log(treeCutter(j, heights))




// O(n*m) where n is height of the largest element in the array
// and m is the length of the array

// now solve using binary search method

function treeCut(k, hights, x = Math.min(Math.max(...hights)/2)){
    if (x < 0 || x > Math.max(...hights)){
        return -1
    }
    let total = 0
    for(let i = 0; i < hights.length; i++){
        if(hights[i] - x > 0){
            total += hights[i] - x
        }
    }

    if(total == k){
        return x
    }else if(total > k){
        x--
        return treeCut(k, hights, x)
    }else{
        x++
        return treeCut(k, hights, x)
    }
}

console.log(treeCut(k, heights))



console.log(treeCut(j, heights))