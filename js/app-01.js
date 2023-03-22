//Creando  un Set
//Propiedades
//size: propiedad que devuelve el número de elementos en el Set
//constructor: propiedad que devuelve la función constructora utilizada para crear un Set
//Symbol.iterator: propiedad que devuelve un función que permite recorrer los elementos del 
//Set utilizando un bluce for por ejemplo
//Metodos
//add, clear(todos), delete(especifico), entries, forEach, has(comprobar existencia), keys, values
let carrito = new Set();
carrito.add('Poleron');
carrito.add('Camisa');
carrito.add('Pantalon');
carrito.add('Pantalon');

console.log(carrito.size);

let numeros = new Set([1,2,3,4,5,6,7,3,3,3,3]);
console.log(numeros.size);

let carrito2 = new Set();
carrito2.add('Poleron');
carrito2.add('Camisa');
carrito2.add('Pantalon');
carrito2.add('Pantalon');

console.log(carrito2.has('Camisa'));

//Eliminar elementos del Set
console.log(carrito2.delete('Poleron'));
console.log(carrito2.has('Poleron'));