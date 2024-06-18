const modeloConsulta = require('../models/modelsConsultas')

const pegarConsultas = async (_req,res)=>{
      
    const consulta = await modeloConsulta.pegarConsultas()
  return res.status(200).json(consulta)
}

const addConsultas = async (req,res)=>{

  const criarConsulta = await modeloConsulta.addConsultas(req.body)

  return res.status(201).json({criarConsulta})

}

const removeConsulta = async (req,res)=>{

  const { id } = req.params

  await modeloConsulta.excluirConsulta(id)

  return res.status(204).json()

}


module.exports = {
    pegarConsultas,
    addConsultas,
    removeConsulta
}
