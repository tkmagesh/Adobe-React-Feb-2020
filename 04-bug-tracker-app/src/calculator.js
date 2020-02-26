//ES6 Modules
// Everything is private by default
// Export the public entities

export function add(x,y){
    return x + y;
}

export function subtract(x,y){
    return x - y;
}

const calculator = { add, subtract };

export default calculator;
