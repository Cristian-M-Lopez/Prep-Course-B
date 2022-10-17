// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    // var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // var suma = 0;

    // for (let i= 0; i < numeros.length; i++) {
    //   suma += numeros[i];
    // } return suma;

    var total = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce((a, b) => a + b);
    return total;
} 

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  var encontrados = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        encontrados.push(array[i]);
    }
  } 
  return encontrados;

 
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  // var elevados = array.map(function(elemento){
  //   return Math.pow(elemento,2);
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
