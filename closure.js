/* Javascript closure */

function add(x){
  function minus(y){
    return y - x;
  };
  return minus;
}

// 
