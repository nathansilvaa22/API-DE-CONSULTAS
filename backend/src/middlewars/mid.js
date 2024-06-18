const validarConsulta = (req,res,next)=>{

    const {body}=req

    if (body.name == undefined) {

        return res.json({message:"name no can be  undefined"})
    }

    if (body.name  == ''){

        return res.json({message:" name cannot be empty"})
    }

   if (body.idade == undefined){

        return res.json({message:"idade no can be  undefined"})

   }
   if(body.idade == ''){


    return res.json({message:"age cannot be empty"})
   }

   if (body.hospital == undefined){

    return res.json({message:"hospital no can be  undefined"})

   }
   if(body.hospital == ''){


   return res.json({message:" hospital cannot be empty"})
   }
   
   if (body.medico == undefined){

    return res.json({message:"medico no can be  undefined"})

   }
   if(body.medico == ''){


   return res.json({message:" medico cannot be empty"})
   }

   if (body.data == undefined){

    return res.json({message:"data no can be  undefined"})

   }
   if(body.data == ''){


   return res.json({message:"data cannot be empty"})
   }

   if (body.horario == undefined){

    return res.json({message:"horario no can be  undefined"})

   }
   if(body.horario == ''){


   return res.json({message:"horario cannot be empty"})
   }


    next()
}

    module.exports = {
        validarConsulta
    }