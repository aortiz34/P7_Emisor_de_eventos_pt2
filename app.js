//var Emitter = require('./emitter.js');
var Emitter = require('events');
let config = require('./config');

var emtr = new Emitter();

// Cuando se modifica el codigo hace exactamente lo mismo que hacia antes pero la ventaja con
// el archivo config es que se modifican todas las funciones a como se indique en el archivo config
// sin tener que modificar de una por una.

emtr.on(config.events.GREET,() =>{
    console.log('Somewhere, someone said hello.')
});

emtr.on(config.events.GREET,()=>{
    console.log('A greeting ocurred!')
});

console.log('Hello!');
emtr.emit('greet');

emtr.on(config.events.JUMP, ()=>{
    console.log('someone jumped!');
});

console.log(emtr);
emtr.emit('jump');
