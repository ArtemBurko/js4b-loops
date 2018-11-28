function listAll(min, max) {
  var i; 
  var result = '';
  for (i = min; i <= max; i++) {
    result = result + i + ' ';}
    // console.log(result);}
  
  return result.trim();

}

function listBetweenDesc(min, max) {
  var i; 
  var result = '';
  for (i = max-1; i > min; i--) {
    result = result + i + ' ';}
    // console.log(result);}
  return result.trim();
}
