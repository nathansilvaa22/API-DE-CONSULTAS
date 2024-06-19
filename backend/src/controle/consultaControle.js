const modeloConsulta = require('../models/modelsConsultas')

const pegarConsultas = async (_req,res)=>{
      
    const consulta = await modeloConsulta.pegarConsultas()
  return res.status(200).json(consulta)
}

const addConsultas = async (req,res)=>{

  const criarConsulta = await modeloConsulta.addConsultas(req.body)

  return res.status(201).json({criarConsulta})

}

const peqConsulta = async (req,res)=>{

  const { name } = req.params

  const pesquisarConsulta = await modeloConsulta.especificConsulta(name)

  return res.status(200).json(pesquisarConsulta)
}

const removeConsulta = async (req,res)=>{

  const { id } = req.params

  await modeloConsulta.excluirConsulta(id)

  return res.status(204).json()

}

const atualizarConsulta = async (req,res)=>{
   const {id} = req.params

   const atualizar = await modeloConsulta.atualizarConsulta(id, req.body)

   return res.status(204).json(atualizar)
}


module.exports = {
    pegarConsultas,
    addConsultas,
    removeConsulta,
    peqConsulta,
    atualizarConsulta
}

