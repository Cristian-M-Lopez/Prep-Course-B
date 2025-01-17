// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    // var acumulador = 0;

    // for (let i= 1; i <= 11; i++) {
    //   acumulador= acumulador + i;
    // } return acumulador;

    var total = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce((acumulador, num) => acumulador + num);
    return total;
} 

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
//otra forma de resolverlo (WHILE):
// var pares = [];
// var i = 0;
// while (i < array.length) { //el indice deber ser menor que el tamanio del array, para que lo recorra.
//   if (array[i] % 2 === 0) {
//     pares.push(array[i]);
// }  i++;
// }  return pares;


  var pares = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        pares.push(array[i]);
    }
  } 
  return pares;

 
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  // RESUELTO CON MAP
  // return array.map(function(num){
  //   return Math.pow(num,2);
  // });

  var elevados = [];

  for (let i = 0; i < array.length; i++) {
   elevados.push(array[i] ** 2);
  } 
  return elevados;
  
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:

  let total = array.reduce((a, b) => a + b);
  return total;

}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  // otra forma num+a -1
  // var numero = num + "";
  // return numero;

  return num.toString().length;

}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
