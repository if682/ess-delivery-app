const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const routes = require('./routes/routes')
const port = 8000


app = express()

app.use(express.json())

app.use(cors({
    credentials: true,
    origin: ['http://localhost:4200']
}))

app.use(cookieParser())

app.use('/api', routes)


app.listen(port)