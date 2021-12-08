const suma = (num1, num2) => num1 + num2;
console.log("El resúltado de la suma es: " + suma(1, 4))

const resta = (num1, num2) => num1 - num2;
console.log("El resúltado de la resta: " + resta(10, 4))

const multiplication = (a, b) => {
    return b >= 0 ? [...Array(b)].reduce((acc) => suma(acc, a), 0) : [...Array(a)].reduce((acc) => suma(acc, b), 0);
};
console.log(multiplication(2, 5));

const division = (a, b) => {
    return b == 0 || a == 0 ? 'No se puede dividir entre cero' : b > 1 ? [...Array(a).keys()].reduce((acc, num) => multiplication(num, b) <= a ? suma(acc, 1) : acc, -1) : a;
}

console.log(division(7, 2));
