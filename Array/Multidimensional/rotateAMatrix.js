// 90 degree anticlockwise rotation of a matrix
function rotateAntiClockwise(matrix){
    let n=matrix.length;
    let newMatrix=[];
    for(let j=n-1;j>=0;j--){
        let row=[];
        for(let i=0;i<n;i++){
            row.push(matrix[i][j]);
        }
        newMatrix.push(row);
    }
    return newMatrix;
}
function rotateAntiClockwise(matrix){
    for (let i=0;i<matrix.length;i++){
        for(let j=0;j<i;j++){
            [matrix[i][j],matrix[j][i]]=[matrix[j][i],matrix[i][j]];
        }
    }
    for(let i=0;i<matrix.length/2;i++){
        [matrix[i],matrix[matrix.length-1-i]]=[matrix[matrix.length-1-i],matrix[i]];
    }
    return matrix
}

// let matrix=[[1,2,3],[4,5,6],[7,8,9]];
let matrix=[[1,2],[3,4]];
console.log(rotateAntiClockwise(matrix));