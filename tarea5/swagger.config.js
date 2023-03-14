const port = process.env.PORT || 3000

module.exports = {
    swaggerDefinition: {
        swagger: "2.0",
        info: {
            "title": "CRUD TAREAS",
            "description": "API para el crud de tareas",
            "version": "1.0.0",
            "servers": ["http: //localhost:" + port]
        }
    },
    apis: ['src/routes/**/*.js']
}