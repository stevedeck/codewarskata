function validParentheses(parens){

  let parenSum = 0;
  
  for (let i=0; i < parens.length; i++) {
    
    switch (parens[i]){
      case "(":
        parenSum++;
        break;
      case ")":
        parenSum--;
        break;
    }
  } 
  
  if (parenSum !== 0){
    return false;
  }
return true;
}
