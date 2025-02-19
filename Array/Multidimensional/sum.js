function sum(matrix,row,col){
    let sum=0;
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            sum+=matrix[i][j];
        }
    }
    return sum;
}

// let matrix=[[1,0,1],[-8,9,-2]]
// console.log(sum(matrix,2,3)); 

function sum(matrix,row,col){
    return matrix.flat().reduce((acc,curr)=>acc+curr,0);
}
let matrix=[[1,0,1],[-8,9,-2]]
console.log(sum(matrix,2,3)); 