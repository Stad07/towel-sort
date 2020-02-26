
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
  let arr = [];
  
  if(matrix) {                              
    let result = matrix.map((item, index) => {
      if ( index % 2 ) {
        item.reverse();
      }
      return item;                     
    });
                             
    for(let i = 0; i < result.length; i++) {
      for(let j = 0; j < result[i].length; j++) {
        arr.push(result[i][j]);
      }
    }                
  }
            
  return arr;    
}
