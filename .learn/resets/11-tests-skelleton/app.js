//funcion que suma dos numeros:
const sum = (a,b) => {
    return a+b
}
//Imprime el resultado de la suma 
console.log(sum(3,7));
//exporta la funcion para usarla en otros archivos
module.exports = { sum };