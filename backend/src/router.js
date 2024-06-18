const express = require('express')
const router = express.Router()
const conection = require("./models/conexao")
const validate = require("./middlewars/mid")

const controleConsulta = require('./controle/consultaControle')

router.get('/consult', controleConsulta.pegarConsultas)
router.post('/consult',validate.validarConsulta,controleConsulta.addConsultas)
router.delete('/consult/:id',controleConsulta.removeConsulta)


module.exports = router