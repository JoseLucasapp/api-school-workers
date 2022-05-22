const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3003
const app = express()
const router = express.Router()

require('./config/database')

app.use(express.json())
app.use(cors())
app.use('/api', router)

require('./modules/workers/routes')(router)

app.listen(PORT)

module.exports = app