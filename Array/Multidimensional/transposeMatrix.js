function transposeMatrix(matrix,n) {
    let transposeMatrix=[];
    for(let i=0;i<n;i++){
        let row=[];
        for(let j=0;j<n;j++){
            row.push(matrix[j][i]);
        }
        transposeMatrix.push(row);
    }
    return transposeMatrix;
}

function transposeMatrix(matrix,n) {
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            let temp=matrix[i][j];
            matrix[i][j]=matrix[j][i];
            matrix[j][i]=temp;
        }
    }
    return matrix;
}

function transposeMatrix(matrix,n){
    for(let i=0;i<n;i++){
        for(let j=0;j<i;j++){
            [matrix[i][j],matrix[j][i]]=[matrix[j][i],matrix[i][j]];
        }
    }
    return matrix
}

let matrix=[[1,1,1,1],[2,2,2,2],[3,3,3,3],[4,4,4,4]];
// let matrix=[[1,2],[9,-2]]
console.log(transposeMatrix(matrix,4));