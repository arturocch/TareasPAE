const noticia = require('./../models/new')

const controllerTareas = {
    ListaNoticias(req, res) {

        let keyword = req.query.keyword
        if (keyword) {
            let data = noticia.buscar(keyword)
            console.log(keyword)
            if (data) {
                res.render('news', { data })
            } else {
                res.render('home')
            }
        } else {
            res.render('home')
        }

    }
}

module.exports = controllerTareas