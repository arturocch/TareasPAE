const noticia = require('./../models/new')

const controllerTareas = {
    ListaNoticias(req, res) {

        let keyword = req.query.keyword
        if (keyword) {
            noticia.buscar(keyword)
            console.log(keyword)
            res.render('news')
        } else {
            res.render('home')
        }

    }
}

module.exports = controllerTareas