const models = require('../models')
const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    models.Usuario.findAll() 
        .then((rows) => {
            res.send(rows)
        })
})

router.get('/:id', (req, res) => {
    models.Usuario.findOne({
        where: {
            id: req.params.id
        }
    }).then((row) => {
        if (row == null)
            res.status(404).send('Id de usuario invalido.')
        else
            res.send(row)
    })
})


router.post('/login', (req, res) => {
    let nombre = req.body.nombre
    let contrasena = req.body.contrasena

    models.Usuario.findOne({
        where: {
             nombre: nombre,
             contrasena: contrasena
        }
    }).then((row) => {
        if (row == null)
            res.status(401).send('Login> Verifique nuevamente sus datos.')
        else
            res.send(row)
    })
})

router.post('/register', (req, res) => {
    let nombre = req.body.nombre
    let contrasena = req.body.contrasena
    //let rol = req.body.rol

    models.Usuario.create({
        nombre: nombre,
        contrasena: contrasena,
        rol: 1
    }).then(() => {
        res.sendStatus(201)
    })
})

router.put('/update/:id', (req, res) => {
    let nombre = req.body.nombre
    let contrasena = req.body.contrasena
    let rol = req.body.rol

    models.Usuario.findOne({
        where: {
            id: req.params.id
        }
    }).then((row) => {
        if (row == null)
            res.status(404).send('Update> Id de usuario invalido.')
        else
        models.Usuario.update({
            nombre: nombre,
            contrasena: contrasena,
            rol: rol
        }).then(() => {
            res.sendStatus(201)
        })
    })





   
})

module.exports = router