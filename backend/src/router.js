const express = require('express')
const router = express.Router()
const conection = require("./models/conexao")
const validate = require("./middlewars/mid")

const controleConsulta = require('./controle/consultaControle')

router.get('/consulta', controleConsulta.pegarConsultas)
router.get('/consulta/:name',controleConsulta.peqConsulta)
router.post('/consulta',validate.validarConsulta,controleConsulta.addConsultas)
router.delete('/consulta/:id',controleConsulta.removeConsulta)
router.put('/consulta/:id', validate.validarConsulta, controleConsulta.atualizarConsulta)


module.exports = router