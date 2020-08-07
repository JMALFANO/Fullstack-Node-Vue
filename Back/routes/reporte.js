const models = require('../models')
const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    models.Reporte.findAll() 
        .then((rows) => {
            res.send(rows)
        })
}); 

router.get('/:id', (req, res) => {
    models.Reporte.findOne({
        where: {
            id: req.params.id
        }
    }).then((row) => {
        if (row == null)
            res.status(404).send('Reporte no encontrado, lo siento.')
        else
            res.send(row)
    });
});

router.post('/', (req, res) => {
    let maquina = req.body.maquina
    let counttrabacolocador = req.body.counttrabacolocador
    let countcontrolremoto = req.body.countcontrolremoto
    let countsopladovacio = req.body.countsopladovacio
    let counthumofuego = req.body.counthumofuego
    let fecha = req.body.fecha

    models.Reporte.create({
        maquina: maquina,
        counttrabacolocador: counttrabacolocador,
        countcontrolremoto: countcontrolremoto,
        countsopladovacio: countsopladovacio,
        counthumofuego: counthumofuego,
        fecha: fecha

    }).then(() => {
        res.sendStatus(201)
    });
});

module.exports = router