// importar la función sum del archivo app.js
const { sum } = require('./app.js');

//primera prueba
test('adds 14 + 9 to equal 23', ()=>{
    //dentro de la prueba llamamos a la funcion sum
    let total = sum(14,9);
    //esperamos que el resultado de sumar 14 y 9 es 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One dollar should be 106.58 yenes", function(){
    //importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')

    //hago mi comparacion
    expect(fromDollarToYen(8)).toBe(852.67); //1 dolar son 106.58 yenes, entonces 8 dolares deberian ser = (8 * 106.58)
})

test("One yen should be 0.00625 pounds", function(){
    //importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')

    //hago mi comparacion
    expect(fromYenToPound(150)).toBe(0.94); // 1 yen son 0.00625 libras, entonces 150 yenes deberian ser = (150 * 0.00625)
})