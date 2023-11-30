const express = require('express')
const cors = require('cors')

const router = require('./src/routes/compra')
const routesUpload = require('./src/routes/upload')
const app = express()

app.use(express.json({ limit: '10mb' }))
app.use(cors())
app.use(router)
app.use(routesUpload)

app.listen(3000, () => {
    console.log("Respondendo na porta 3000")
})