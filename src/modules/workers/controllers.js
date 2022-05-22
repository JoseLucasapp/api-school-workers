const { getAllWorkers, getOneWorker, updateWorker, deleteWorker, addWorker } = require('./services')

module.exports.addWorker = async (req, res) => {
    try {
        const worker = await addWorker(req.body)
        res.status(200).json(worker)
    } catch (err) {
        res.status(500).json({ msg: err })
    }
}

module.exports.getWorkers = async (req, res) => {
    try {
        const workers = await getAllWorkers()
        res.status(200).json({ data: workers })
    } catch (err) {
        res.status(500).json({ msg: err })
    }
}

module.exports.getAnWorker = async (req, res) => {
    try {
        const worker = await getOneWorker(req.params.id)
        if (worker === 'Not found') {
            return res.status(404).json({ msg: worker })
        }
        res.status(200).json(worker)
    } catch (err) {
        res.status(500).json({ msg: err })
    }
}

module.exports.updateAnWorker = async (req, res) => {
    try {
        const worker = await updateWorker(req.params.id)
        if (worker === 'Not found') {
            return res.status(404).json({ msg: worker })
        }
        res.status(200).json({ msg: worker })
    } catch (err) {
        res.status(500).json({ msg: err })
    }
}

module.exports.deleteAnWorker = async (req, res) => {
    try {
        const worker = await deleteWorker(req.params.id)
        if (worker === 'Not found') {
            return res.status(404).json({ msg: worker })
        }
        res.status(200).json({ msg: worker })
    } catch (err) {
        res.status(500).json({ msg: err })
    }
}