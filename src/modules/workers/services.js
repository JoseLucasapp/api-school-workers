const workersSchema = require('./model')

const getAllWorkers = async () => await workersSchema.find({})

const getOneWorker = async (id) => await workersSchema.findOne({ _id: id })

const addWorker = async (data) => {
    const newWorker = new workersSchema({
        name: data.name,
        age: data.age,
        role: data.role
    }).save()

    return await newWorker
}

const updateWorker = async (id, data) => {
    await workersSchema.updateOne({ _id: id }, { $set: data }).exec((err) => {
        if (err) {
            return err
        }
    })

    return 'Updated'
}

const deleteWorker = async (id) => {
    await workersSchema.deleteOne({ _id: id })

    return 'Deleted'
}

module.exports = { getAllWorkers, getOneWorker, addWorker, updateWorker, deleteWorker }