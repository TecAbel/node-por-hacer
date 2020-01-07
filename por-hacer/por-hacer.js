/**
 * llama a file system
 */

const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/tareas.json', data, (err) => {
        if (err) {
            throw new Error('No se pudo crear el archivo');
        }
    });
}

let cargarDB = () => {
    try {
        listadoPorHacer = require('../db/tareas.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

let actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

let getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

let crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    }

    //llenar el array

    listadoPorHacer.push(porHacer);

    //guardar el array

    guardarDB();

    return porHacer;
}

let borrar = (descripcion) => {
    cargarDB();

    let nuevo = listadoPorHacer.filter(tarea => descripcion !== tarea.descripcion);

    if (listadoPorHacer.length === nuevo.length) {
        return false;
    } else {
        listadoPorHacer = nuevo;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}