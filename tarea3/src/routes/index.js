const router = require('express').Router()
const rutasHobbies = require('./hobbies')
const rutasMascotas = require('./mascotas')


router.use('/hobbies', rutasHobbies)
router.use('/mascotas', rutasMascotas)

function cargarHome(req, res) {
    console.log('api works')
    res.render('home')
        //const ruta = path.join(__dirname, 'src', 'views', 'index.html')
        //res.sendFile(__dirname + '/vistas/index.html')
        // res.sendFile(ruta)

}

router.get('', cargarHome)

router.get('*', function(req, res) {
    res.status(404).render('404')

})

module.exports = router