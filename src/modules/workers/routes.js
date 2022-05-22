const { create } = require('./validators')
const { addWorker, getWorkers, getAnWorker, updateAnWorker, deleteAnWorker } = require('./controllers')

module.exports = (router) => {
    router.post("/workers", create, addWorker)
    router.get("/workers", getWorkers)
    router.get("/workers/:id", getAnWorker)
    router.put("/workers/:id", updateAnWorker)
    router.delete("/workers/:id", deleteAnWorker)
}