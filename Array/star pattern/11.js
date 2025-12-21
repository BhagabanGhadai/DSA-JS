/*
* * * * * * * * * 
  * * * * * * * 
    * * * * * 
      * * * 
        * 
 */
function starPattern(n){
    for(let i=0;i<n;i++){
        let row=""
        for(let k=0;k<i;k++){
            row+="  "
        }
        for(let j=0;j<2*(n-i-1)+1;j++){
            row+="* "
        }
        console.log(row);
    }
}

starPattern(5);