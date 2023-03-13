const router = require('express').Router()
const rutasNews = require('./news')

router.use('/news', rutasNews)

function cargarHome(req, res) {
    console.log('api works')
    res.render('home')
        //const ruta = path.join(__dirname, 'src', 'views', 'index.html')
        //res.sendFile(__dirname + '/vistas/index.html')
        // res.sendFile(ruta)

}

router.get('', cargarHome)
router.get('*', function(req,res){
    res.status(404).send('pagina no encontrada')
})

module.exports = router