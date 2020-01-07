/**
 * optimizar opciones
 */


const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const completado = {
        default: true,
        alias: 'c',
        desc: 'Marca como completado o pendiente la tarea'
    }
    /**
     * llama a paquete yargs
     */
const argv = require('yargs')
    .command('crear', 'Crear una tarea por hacer', { descripcion })
    .command('actualizar', 'Actualiza el estado de la tarea', { descripcion, completado })
    .command('borrar', 'Borra una tarea registrada', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}