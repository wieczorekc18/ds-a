
/* 

To use a 1-index array as a max heap use these rules
    - elements in array represent nodes
    - given a node at index i its children are found
        - left child is index (i*2)
        - right child is index (i*2) + 1
    - given a node at index i, it's parent
        - is at Math.floor(i/2)
*/

// making null at index 0 makes it a 1-index array

// [null, 15, 14, 13, 12, 11, 10]

    //      15
    //     / \
    //   14   13
    //   /\    /
    // 12 10  11

// heap.insert(9)

    //      15
    //     / \
    //   14   13
    //   /\    /\
    // 12 10  11 9

// now change our top root node to 100
// heap.insert(50)

    //     100
    //     / \
    //   14   13
    //   /\    /\
//     12 10  11 9
//     /
//    50

// this breaks our rule so we swap the 50 with a parent 
// until it no longer breaks rules

    //     100
    //     / \
    //   14   13
//       /\    /\
//     50 10  11 9
//     /
//    12

// once more



    //     100
    //     / \
    //   50   13
    //   /\    /\
//     14 10  11 9
//     /
//    12


/*
    Begin with simple push into array and swap with parent until 
    parent is greater than inserted value
*/

// class MaxHeap{
//     constructor(){
//         this.array = [Infinity]; //because index 0 will screw up rules listed above
//     }

//     insert(val){
//         // find where can this value be added without breaking rules
//         const ary = this.array
//         ary.push(val)
//         this.siftUp(ary.length - 1)
//     }

//     siftUp(idx){
//         // check if node at idx is bigger than parent
//         // if it is bigger swap with parent

//         // const parentIdx = Math.floor(idx/2);
//         // if(this.array[idx] > this.array[parentIdx]){
//         //     [ this.array[idx], this.array[parenIdx] ] = [ this.array[parentIdx], this.array[idx] ]
//         // }
//         const ary = this.array
//         const parentIdx = Math.floor(idx / 2);
        
//         if (ary[idx] > ary[parentIdx]) {
//             [ary[idx], ary[parenIdx]] = [ary[parentIdx], ary[idx]]
//             this.siftUp(parentIdx)
//         }
//     }
// }


