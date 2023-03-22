//WeakSet();
let ws = new WeakSet();
//Clientes
const cliente = {
    nombre: 'Nicolas',
    saldo: 300000
}
const cliente2 = {
    nombre:'Dusan',
    saldo: 500000
}
const nombre = 'Pedro';

//Solo se pueden agregar objetos
ws.add(cliente);
ws.add(cliente2);
//Nos da error debido a que no es un objeto
// ws.add(nombre);
console.log(ws.delete(cliente));
console.log(ws.has(cliente));
console.log(ws);
//No tiene size, pero si tiene Length
//keys, values y entries