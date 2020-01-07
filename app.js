const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');

//console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('====================='.green);
            console.log(`Tarea: ${tarea.descripcion}`);
            console.log(`Completado: ${tarea.completado}`);
            console.log('====================='.green);
        }
        break;
    case 'actualizar':
        let resp = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(resp);
        break;
    case 'borrar':
        let borrar = porHacer.borrar(argv.descripcion);
        console.log(borrar);
        break;
    default:
        console.log('Comando no reconocido');
        break;
}