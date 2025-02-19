function sumOfUpperAndLowerTringles(matrix,row,col){
    if(row!==col){
        return "Matrix should be square matrix";
    }
    let upperSum=0;
    let lowerSum=0;
    for(let i=0;i<row;i++){
        for(let j=i;j<col;j++){
            upperSum+=matrix[i][j];
        }
        for(let j=0;j<=i;j++){
            lowerSum+=matrix[i][j];
        }
    }
    return [upperSum,lowerSum]
}

// let matrix=[[6,5,4],[1,2,5],[7,9,7]];
let matrix=[[1,2],[3,4]];
console.log(sumOfUpperAndLowerTringles(matrix,2,2));