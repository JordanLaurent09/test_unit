function returnAddComponents (a, b) {

    return a + b;
}

function returnDivideComponents (a, b) {
    if ( b === 0 ) throw Error('Division by zero');
    return a / b;
}

function returnMultiplyComponents (a, b) {

    return a * b;
}

function returnSubstractComponents (a, b) {

    return a - b;
}

module.exports = { 
    returnAddComponents, 
    returnDivideComponents,
    returnMultiplyComponents,
    returnSubstractComponents
};
