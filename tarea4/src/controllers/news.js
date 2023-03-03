const noticia = require('./../models/new')
const controllerTareas = {
    ListaNoticias(req,res) {
    noticia.buscar()
    .then(noticias =>{ res.send(tareas)})
    .catch(error => { res.send("error")})
}
}

module.exports =  controllerTareas