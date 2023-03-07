const noticia = require('./../models/new')

const controllerTareas = {
    ListaNoticias(req, res) {

        let keyword = req.query.keyword
        if (keyword) {
            noticia.buscar(keyword)
            .then(response => {
                console.log(response.data.articles)
                res.render('news', {noticias: response.data.articles})
            })
            .catch(error=> {
                res.send('algo salio mal').status(400)
            })
        } else {
            res.render('home')
        }

    }
}

module.exports = controllerTareas