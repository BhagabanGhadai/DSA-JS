/*
                
*             * 
* *         * * 
* * *     * * * 
* * * * * * * * 
* * *     * * * 
* *         * * 
*             * 
                
 */
function starPattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += "* ";
    }
    for (let k = 0; k < n - i - 1; k++) {
      row += "    ";
    }
    for (let l = 0; l < i; l++) {
      row += "* ";
    }
    console.log(row);
  }
  for (let j = 0; j < n; j++) {
    let row = "";
    for (let k = 0; k < n - 2 - j; k++) {
      row += "* ";
    }
    for (let l = 0; l <  j+1; l++) {
      row += "    ";
    }
    for (let m = 0; m < n - 2 - j; m++) {
      row += "* ";
    }
    console.log(row);
  }
}

starPattern(5);
