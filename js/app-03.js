//Maps
//Lista ordenada en llave- valor, el tipo de dato o valor puede ser cualquiera

let clienteMap = new Map();

clienteMap.set('nombre', 'Nicolas Bustamante');
clienteMap.set('tipo', 'Premium');
clienteMap.set('saldo', 3000000);

console.log(clienteMap);

//Acceder a los valores
console.log(clienteMap.get('nombre'));
console.log(clienteMap.get('tipo'));
console.log(clienteMap.get('saldo'));

//Metodos
console.log(clienteMap.size);
//Metodos para obtener información
console.log(clienteMap.has('tipo'));
console.log(clienteMap.get('tipo'));
//Borrar
clienteMap.delete('nombre');
console.log(clienteMap.has('nombre'));
console.log(clienteMap.get('nombre'));
console.log(clienteMap.size);

//Borrar Map 
clienteMap.clear();
console.log(clienteMap);

//Inicializar un map con diferentes valores
const paciente = new Map([['nombre', 'paciente'], ['habitacion', 'no definida']]);

paciente.set('nombre', 'Nicolas Bustamante');
paciente.set('habitacion', 402);
console.log(paciente);

//forEach
paciente.forEach((datos, index) => {
    console.log(`${index}: ${datos}`);
});
