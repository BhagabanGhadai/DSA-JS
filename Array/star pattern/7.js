/*

* * * * * * * * * * 
* * * *     * * * * 
* * *         * * * 
* *             * * 
*                 * 

 */
function starPattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for(let j=0;j<n-i;j++){
        row+= "* ";
    }
    for(let k=0;k<i*2;k++){
        row += "  ";
    }
    for(let l=0;l<n-i;l++){
        row += "* ";
    }
    console.log(row);
  }
}

starPattern(5);
