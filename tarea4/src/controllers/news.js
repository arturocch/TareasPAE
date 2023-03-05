const noticia = require('./../models/new')

const controllerTareas = {
    ListaNoticias(req, res) {

        let keyword = req.query.keyword
        noticia.buscar(keyword)
        console.log(keyword)
        res.render('home')

    }
}

module.exports = controllerTareas