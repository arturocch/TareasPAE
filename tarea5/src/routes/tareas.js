const express = require('express')
const router = express.Router()
const controller = require('./../controllers/tareas')

    //middlewares va entre ruta y funcion
    /**
     * @swagger
     * /tareas:
     *  post:
     *    description: crear una nueva tarea
     *    parameters: 
     *      - in: body
     *        name: titulo
     *        description: el titulo de la tarea
     *        schema: 
     *          type: string
     *    responses:
     *      200: 
     *        description: lista de tareas del usuario 
     *      400:
     *        description: error
     */
router.post('', express.json(), controller.crearTarea)

    //middlewares va entre ruta y funcion
    /**
     * @swagger
     * /tareas/id:
     *  put:
     *    description: Actualizar una tarea
     *    parameters: 
     *      - in: path
     *        id: id tarea
     *        schema: 
     *          type: string
     *      - in: body
     *        name: titulo 
     *        description: el titulo de la tarea
     *        schema: 
     *          type: string
     *    responses:
     *      200: 
     *        description: lista de tareas del usuario 
     *      400:
     *        description: error
     */
router.put('/:id', express.json(), controller.actualizarTarea)
    //middlewares va entre ruta y funcion
    /**
     * @swagger
     * /tareas:
     *  get:
     *    description: muestra todas las tareas
     *    responses:
     *      200: 
     *        description: lista de tareas del usuario 
     *      400:
     *        description: error
     */
router.get('', controller.listaTareas)
    //middlewares va entre ruta y funcion
    /**
     * @swagger
     * /tareas/id:
     *  get:
     *    description: mostrar una tarea especifica
     *    parameters: 
     *      - in: path
     *        id: tarea id
     *        schema: 
     *          type: string
     *    responses:
     *      200: 
     *        description: lista de tareas del usuario 
     *      400:
     *        description: error
     */
router.get('/:id', controller.tareaEsp)
    //middlewares va entre ruta y funcion
    /**
     * @swagger
     * /tareas/id:
     *  delete:
     *    description: eliminar una tarea
     *    parameters: 
     *      - in: path
     *        id: tarea id
     *        schema: 
     *          type: string
     *    responses:
     *      200: 
     *        description: lista de tareas del usuario 
     *      400:
     *        description: error
     */
router.delete('/:id', controller.eliminarTarea)






module.exports = router