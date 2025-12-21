/*

        * 
      * * 
    * * * 
  * * * * 
    * * * 
      * * 
        * 

 */
function starPattern(n) {
  for (let i = 0; i < 2*n-1; i++) {
    let row = "";
   for(let j=0;j<Math.max(i+1,2*n-1-i);j++){
        row+= " ";
    }
   for(let k=0;k<Math.min(i+1,2*n-1-i);k++){
        row+= "* ";
    }
    console.log(row);
  }
}
// function starPattern(n) {
//   for (let i = 0; i < n; i++) {
//     let row = "";
//    for(let j=0;j<n-i;j++){
//         row+= "  ";
//     }
//    for(let k=0;k<i;k++){
//         row+= "* ";
//     }
//     console.log(row);
//   }
//   for (let i = 0; i < n-1; i++) {
//     let row = "";
//    for(let j=0;j<=i+1;j++){
//         row+= "  ";
//     }
//    for(let k=n-2-i;k>0;k--){
//         row+= "* ";
//     }
//     console.log(row);
//   }
// }

starPattern(5);
