const router = require('express').Router()
const rutasTareas = require('./tareas')

router.use('/tareas', rutasTareas)


router.get('*', function(req, res) {
    res.status(404).send('pagina no encontrada')

})

module.exports = router