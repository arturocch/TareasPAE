const tarea = require('./../models/tarea')

const tareasController = {
    listaTareas: (req, res) => {
        tarea.find({})
            .then(response => {
                //console.log(req)
                console.log(response)
                res.send(response)
            })
            .catch(error => {
                res.status(400).send('algo salió mal')
            })
    },

    crearTarea: (req, res) => {
        tarea.create(req.body)
            .then(response =>{
                console.log(response)
                res.send(response)
            })
            .catch(error => {
                res.status(400).send('algo salió mal')
            })
        
        
    },

    actualizarTarea: (req, res) => {
        const id = req.params.id
        const object = req.body
        console.log(object)
        tarea.findByIdAndUpdate(id, object)
            .then(response =>{
                res.send(response)
            })
            .catch(error => {
                res.status(400).send('algo salió mal')
            })
    },

    tareaEsp: (req, res) => {
        const id = req.params.id
        tarea.findById(id)
            .then(response => {
                console.log(response)
                res.send(response)
            })
            .catch(error => {
                console.log(error)
                res.status(400).send('algo salió mal')
            })
    },
    eliminarTarea: (req, res) => {
        const id = req.params.id
        tarea.findByIdAndRemove(id)
            .then(response =>{
                res.send(response)
            })
            .catch(error => {
                res.status(400).send('algo salió mal')
            })
    }
}

module.exports = tareasController