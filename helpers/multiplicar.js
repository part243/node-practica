const fs = require('fs');
const colors = require('colors');

const tblmultiplicar = async (base=1,listar,limit=10) => {
    if (isNaN(base))
        throw `la base "${base}" no es numérico.`

    try {
        salida = '';
        guardar = '';
        for(let i=1;i<=limit;i++){
            salida += `${base}` + 'x'.green + `${i} `+'='.red+` ${base*i} \n`;
            guardar += `${base}` + 'x' + `${i} `+'='+` ${base*i} \n`;
        }
        if(listar) //para listar en consola
            console.log(salida);
        fs.writeFileSync(`./salida/tabla${base}.txt`,guardar);
        return (`./../salida/tabla-${base}.txt creada`);
    } catch (error) {
        return (error);
    }

}

module.exports = {
    tblmultiplicar
}




