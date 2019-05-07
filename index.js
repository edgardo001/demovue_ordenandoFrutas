// npm install express cors body-parser
var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
// var createError = require('http-errors')
// var cookieParser = require('cookie-parser')
// var morgan = require('morgan')

var app = express()
var path = require('path')
var serveStatic = require('serve-static')

// El directorio "/dist" contiene los elementos publicos
app.use(serveStatic(path.join(__dirname, '/dist')))
// app.use(morgan('tiny'))
app.use(cors())
app.use(bodyParser.json())

// Pagina SPA
app.get('/', (req, res) => {
  res.sendFile('index.html')
})

app.get('/api', (req, res) => {
  res.json({ message: 'Behold The MEVN Stack!' })
})

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`listening on ${port}`)
})
