function add (a,b){
    return (a+b);
}

function subtract (a,b){
    return (a-b);
}

function multiply (a,b){
    return (a*b);
}

function divide (a,b){
    return (a/b);
}

function operate (operator, a, b){
    if (operator == 1){
        add(a,b);
    } else if (operator == 2){
        subtract(a,b);
    } else if (operator == 3){
        multiply(a,b);
    } else if (operator == 4){
        divide(a,b);
    }
}