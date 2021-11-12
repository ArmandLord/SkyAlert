var polishNotation = "2 9 5 + -";
function reversePolishNotation(polish) {
    var expr = polish.split(" ");
    var stack = [];
    for (var i = 0; i < expr.length; i++) {
        if (!isNaN(expr[i]) && isFinite(expr[i])) {
            stack.push(expr[i]);
        }
        else {
            var a = stack.pop();
            var b = stack.pop();
            if (expr[i] === "+") {
                stack.push(parseInt(a) + parseInt(b));
            }
            else if (expr[i] === "-") {
                stack.push(parseInt(b) - parseInt(a));
            }
            else if (expr[i] === "*") {
                stack.push(parseInt(a) * parseInt(b));
            }
        }
    }
    if (stack.length > 1) {
        return "ERROR";
    }
    else {
        console.log(typeof stack[0]);
        return stack[0];
    }
}
reversePolishNotation(polishNotation);

module.exports = reversePolishNotation
