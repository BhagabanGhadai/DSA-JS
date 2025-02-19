function multiplication(matrix1, matrix2) {
    if (matrix1[0].length !== matrix2.length) {
        return "The number of columns in the first matrix should be equal to the number of rows in the second matrix";
    }
    let newMatrix = [];
    for (let i = 0; i < matrix1.length; i++) {
        let row = [];
        for (let j = 0; j < matrix2.length; j++) {
            let sum = 0;
            for (let k = 0; k < matrix2.length; k++) {
                sum += matrix1[i][k] * matrix2[k][j];
            }
            row.push(sum);
        }
        newMatrix.push(row);
    }
    return newMatrix;
}

let matrix1 = [[1, 4, -2], [3, 5, -6]];
let matrix2 = [[5, 2, 8, -1], [7, 9, 4, 3], [6, 3, 0, 7]];
console.log(multiplication(matrix1, matrix2));