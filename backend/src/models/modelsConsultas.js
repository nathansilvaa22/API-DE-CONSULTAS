const conection = require('./conexao')

const pegarConsultas = async ()=> {

    const consulta = await conection.execute('SELECT * FROM consulta')

    return consulta[0]
}

const especificConsulta = async (name)=>{



    const query = 'SELECT * FROM consulta WHERE name = ?'

    const consulta = await conection.execute(query,[name])

    return consulta[0]

}


const addConsultas = async (consulta)=>{


    const {name, idade , hospital , medico , data , horario} = consulta

    const query = 'INSERT INTO consulta (name , idade, hospital , medico , data , horario) VALUES (?,?,?,?,?,?)'

    const criarConsulta = await conection.execute(query,[name,idade,hospital,medico,data,horario])

    return {insertId: criarConsulta}
}

const excluirConsulta = async (id)=>{

    const query = 'DELETE FROM consulta WHERE id = ?'

    const removeConsulta = await conection.execute(query,[id])

    return removeConsulta

}

const atualizarConsulta = async (id, consulta) => {
    const { name, idade, hospital, medico, data, horario } = consulta;

    const query = 'UPDATE consulta SET name = ?, idade = ?, hospital = ?, medico = ?, data = ?, horario = ? WHERE id = ?';

    try {
        const [atualizacao] = await conection.execute(query, [name, idade, hospital, medico, data, horario, id]);
        return atualizacao;
    } catch (error) {
        console.error('Erro ao atualizar consulta:', error);
        throw error;
    }
};

module.exports = {

    pegarConsultas,
    addConsultas,
    excluirConsulta,
    especificConsulta,
    atualizarConsulta
}