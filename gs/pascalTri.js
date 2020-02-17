



function pascal(row, column){
    let tri = []
    let i = 0
    while(i <= row){
        tri[i] = new Array(i+1)
        let j = 0
        while(j < i+1){
            if(j == 0 || j == i){
                tri[i][j] = 1
            }else{
                tri[i][j] = tri[i-1][j] + tri[i-1][j-1]
            }
            j++
        }
        i++
    }
    
    console.log(tri)
    return tri[row][column]
}




//             1
//         1       1
//     1       2       1
// 1       3       3       1









function pascalTriangle(row, column){
    let tri = [];
    let i = 0;
    while(i <= row){
        tri[i] = new Array(i+1)
        j = 0
        while(j < (i+1)){
            if(j === 0 || j === i){
                tri[i][j] = 1;
                j++
            }else{
                tri[i][j] = tri[i - 1][j-1] + tri[i - 1][j];
                j++
            }
        }
        console.log(tri[i])
        i++
    }
    return tri[row][column]

}

console.log(pascalTriangle(4, 2))

console.log(pascal(4, 2))