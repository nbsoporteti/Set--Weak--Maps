//Weakmap

let key = {usuarioId:1};
let key2 = {usuarioId:2};
let weakmap = new WeakMap();

weakmap.set(key, 'Nicolas Bustamante');
weakmap.has(key);//true
weakmap.get(key);//Nicolas Bustamante
weakmap.delete(key);//true
weakmap.get(key);//undefined

weakmap.set(key2, 'Pablo' );
//No utiliza propiedades size ni length debido a que no los objetos no se enumeran en WeakMap()
