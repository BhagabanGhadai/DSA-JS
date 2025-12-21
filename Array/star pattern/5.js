/*

* * * * * 
  * * * * 
    * * * 
      * * 
        * 
        
 */
function starPattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for(let j=0;j<i;j++){
        row+= "  ";
    }
    for(let k=0;k<n-i;k++){
        row += "* ";
    }
    console.log(row);
  }
}

starPattern(5);
