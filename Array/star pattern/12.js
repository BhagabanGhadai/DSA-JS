/*
          * 
        * * * 
      * * * * * 
    * * * * * * * 
  * * * * * * * * * 
 */
function starPattern(n){
    for(let i=0;i<n;i++){
        let row=""
        for(let k=n;k>i;k--){
            row+="  "
        }
        for(let j=0;j<2*i+1;j++){
            row+="* "
        }
        console.log(row);
    }
}

starPattern(5);