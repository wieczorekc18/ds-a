

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