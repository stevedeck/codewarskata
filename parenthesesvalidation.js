function validParentheses(parens){

  let parenSum = 0;
  let brackets = [];
  
  for (let i=0; i < parens.length; i++) {
    
    switch (parens[i]){
      case "(":
        parenSum++;
        brackets.push(parens[i]);
        break;
      case ")":
        parenSum--;
        if (brackets.Count < 0) return false;
        
        let open = brackets.pop();
        
        if (parens[i] == ')' && open != '(' ) {
          return false;
        }
        break;
    }
  } 
  
  if (parenSum !== 0){
    return false;
  }
return true;
}
