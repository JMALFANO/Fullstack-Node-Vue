const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')

const usuariosRouter = require('./routes/usuario')
const productosRouter = require('./routes/producto')
const reportesRouter = require('./routes/reporte')
const methodOverride = require('method-override');


const models = require('./models')

const app = express()

app.use(bodyparser.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')
    next();
})

app.use(methodOverride('_method'));

models.sync()

app.use('/usuario', usuariosRouter)
app.use('/producto', productosRouter)
app.use('/reporte', reportesRouter)


app.set('puerto', process.env.PORT || 3000)
app.listen(app.get('puerto'), () => {//port=5000, function() {
    console.log('Servidor escuchando en 3000')
})
