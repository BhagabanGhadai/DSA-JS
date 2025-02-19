function snakePatternMatrix(n,matrix){
    let result=[];
    for(let i=0;i<n;i++){
        if(i%2===0){
            for(let j=0;j<matrix[i].length;j++){
                result.push(matrix[i][j]);
            }
        }else{
            for(let j=matrix[i].length-1;j>=0;j--){
                result.push(matrix[i][j]);
            }
        }
    }
    return result;
}

let matrix=[[10,20,30,40],[50,60,70,80],[27,29,47,48],[32,33,39,50]];
console.log(snakePatternMatrix(4,matrix));