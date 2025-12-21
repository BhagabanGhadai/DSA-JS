/*

* 
* * 
* * * 
* * * * 
* * * * * 
* * * * 
* * * 
* * 
* 

 */

function starPattern(n) {
  for (let i = 0; i < 2*n-1; i++) {
    let row = "";
   for(let j=0;j<Math.min(i+1,2*n-1-i);j++){
        row+= "* ";
    }
    console.log(row);
  }
}

function starPattern(n) {
  for(let i=0;i<n;i++){
    let row = "";
    for(let j=0;j<=i;j++){
        row += "* ";
    }
    console.log(row);
  }
  for(let i=0;i<n-1;i++){
    let row = "";
    for(let k=0;k<n-1-i;k++){
        row += "* ";
    }
    console.log(row);
  }
}

starPattern(5);
