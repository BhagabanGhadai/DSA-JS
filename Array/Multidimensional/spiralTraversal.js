function sprialTraversal(matrix,row,column){
    let newArr=[];
    let top=0;
    let bottom=row-1;
    let left=0;
    let right=column-1;
    while(newArr.length!==row*column){
        for(let i=left;i<=right;i++){
            newArr.push(matrix[top][i]);
        }
        top++;
        for(let i=top;i<=bottom;i++){
            newArr.push(matrix[i][right]);
        }
        right--;
        if(top<=bottom){
            for(let i=right;i>=left;i--){
                newArr.push(matrix[bottom][i]);
            }
            bottom--;
        }
        if(left<=right){
            for(let i=bottom;i>=top;i--){
                newArr.push(matrix[i][left]);
            }
            left++;
        }
    }
    return newArr;
}
let matrix=[[1,2,3,4],[5,6,7,8],[9,10,11,12]];
let row=3;
let column=4;
console.log(sprialTraversal(matrix,row,column));