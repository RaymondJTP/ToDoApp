const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
const router = require('./routers')

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', router)

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
  })

