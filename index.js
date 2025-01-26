const express = require('express')

const bodyParser = require('body-parser')

const cors = require('cors')

const MainRouter = require('./src/routes/index.routes')

const { dbConnection } = require('./src/config/database.config')

const { errorHandler } = require('./src/middleware/errorhandler.middleware')

const app = express()

require('dotenv').config()
const port = process.env.PORT

app.use(bodyParser.json())

app.use(cors('*'))

app.get('/', (req, res) => {
    res.json({message:'welcome to w3 hirings'})
})

app.use('/api', MainRouter)

app.use(errorHandler)

app.listen(port, async () => {
    await dbConnection()
    console.log(`server listening on port `+  port)
})