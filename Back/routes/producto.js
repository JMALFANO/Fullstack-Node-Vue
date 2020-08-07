const models = require('../models')
const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    models.Producto.findAll() 
        .then((rows) => {
            res.send(rows)
        })
})

router.get('/:id', (req, res) => {
    models.Producto.findOne({
        where: {
            id: req.params.id
        }
    }).then((row) => {
        if (row == null)
            res.status(404).send('Producto no encontrado, lo siento.')
        else
            res.send(row)
    })
})

router.post('/', (req, res) => {
    let descripcion = req.body.descripcion
    let imagen = req.body.imagen
    let pico = req.body.pico
    let cubicaje = req.body.cubicaje
    let cantxbolsa = req.body.cantxbolsa
    let tono = req.body.tono
    let alto = req.body.alto
    let diametro = req.body.diametro

    models.Producto.create({
        descripcion: descripcion,
        imagen: imagen,
        pico: pico,
        cubicaje: cubicaje,
        cantxbolsa: cantxbolsa,
        tono: tono,
        alto: alto,
        diametro: diametro
        
    }).then(() => {
        res.sendStatus(201)
    })
})

module.exports = router