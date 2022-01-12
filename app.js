//funcion que suma dos numeros:
const sum = (a, b) => {
    return a + b
}
//Imprime el resultado de la suma 
console.log(sum(3, 7));
//exporta la funcion para usarla en otros archivos
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// funcion que convierte de dolar a euro para luego pasar a yen con solo dos decimales
function fromDollarToYen(dollar) {
    return +(Math.round((dollar / oneEuroIs.USD) * oneEuroIs.JPY + "e+2")  + "e-2");
}
console.log(fromDollarToYen(8));


// funcion que convierte de euro a dolar
function fromEuroToDollar(euro) {
    return euro * oneEuroIs.USD;
}
console.log(fromEuroToDollar(3.5));

// funcion que convierte de yen a euro para luego pasar a libra con solo dos decimales
function fromYenToPound(yen) {
    return +(Math.round((yen / oneEuroIs.JPY) * oneEuroIs.GBP + "e+2")  + "e-2");;
}
console.log(fromYenToPound(1));
