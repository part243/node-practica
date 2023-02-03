const argv = require('yargs') //requerido para obtener los argumentos que se envien por consola
            .option('b', {
                alias: ['base','bs'],
                type: 'number', //tipo de dato a require
                demandOption: true, //obligatorio
                describe: 'Es la base de la tabla de multiplicar'
            })  
            .option('h', {
                alias: ['hasta','limit','li'],
                type: 'number', //tipo de dato a require
                demandOption: false, //obligatorio
                describe: 'hasta que número va a llegar la tabla'
            })
            .option('l', {
                alias: 'lista',
                type: 'boolean', //tipo de dato a require
                demandOption: false, //obligatorio
                default: false, //valor por defecto
                describe: 'true para mostrar la tabla y false para no mostrar'
            })  
            .check((argv,options)=>{
                if(isNaN(argv.b)){
                    throw `la base ingresada debe ser un número`;
                }
                    return true;
                })       
            .argv; //captura variables desde la consola

module.exports = {
    argv
}