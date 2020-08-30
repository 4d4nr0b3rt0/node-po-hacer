const argv = require('yargs')
    .command('crear', 'Se crea una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea'
        }
    })
    .command('actualizar', 'Actualiza el estado de la tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea'
        },
        completado: {
            demand: true,
            alias: 'c',
            desc: 'Marcar completada la tarea'
        }
    })
    .command('borrar', 'Borra una tarea', {
        descripcion: {
            demand: true,
            alias: 'b',
            desc: 'Borrar una tarea'
        }
    })



.help()
    .argv;

module.exports = {
    argv
}