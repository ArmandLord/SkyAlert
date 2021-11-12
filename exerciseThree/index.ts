const polishNotation: string = "2 9 5 + -";

function reversePolishNotation(polish: any) {
  let expr = polish.split(" ");
  let stack: any = [];

  for (let i = 0; i < expr.length; i++) {
    if (!isNaN(expr[i]) && isFinite(expr[i])) {
      stack.push(expr[i]);
    } else {
      let a = stack.pop();
      let b = stack.pop();
      if (expr[i] === "+") {
        stack.push(parseInt(a) + parseInt(b));
      } else if (expr[i] === "-") {
        stack.push(parseInt(b) - parseInt(a));
      } else if (expr[i] === "*") {
        stack.push(parseInt(a) * parseInt(b));
      }
    }
  }

  if (stack.length > 1) {
    return "ERROR";
  } else {
    return stack[0];
  }
}

reversePolishNotation(polishNotation);
