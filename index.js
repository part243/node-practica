const { options } = require('yargs');
const {tblmultiplicar} = require('./helpers/multiplicar');
const {argv} = require('./config/argumetnosConsola');


tblmultiplicar(argv.b,argv.l,argv.h)
    .then( (res) =>
        console.log(res)
    ).catch((err) => console.log(err))


    