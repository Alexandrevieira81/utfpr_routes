import axios from 'axios';


export const cadastrarSegmento = async (segmento) => {
    console.log(segmento);

    try {
        const token = sessionStorage.getItem('token')
        let res = await axios.post('http://127.0.0.1:3000/segmento', segmento, { headers: { Authorization: `Bearer ${token}` } });
        return res
    } catch (error) {
        console.log("ERRO AO CADASTRAR SEGMENTO: " + error);
        return error.response
    }
}

export const atualizarSegmento = async (segmento) => {
    console.log(segmento);

    try {
        const token = sessionStorage.getItem('token')
        let res = await axios.put('http://127.0.0.1:3000/segmento', segmento, { headers: { Authorization: `Bearer ${token}` } });
        return res
    } catch (error) {
        console.log("ERRO AO ATUALIZAR SEGMENTO: " + error);
        return error.response
    }
}

export const deletarSegmento = async (id) => {
    console.log(id);

    try {
        const token = sessionStorage.getItem('token')
        let res = await axios.delete('http://127.0.0.1:3000/segmento/'+id, { headers: { Authorization: `Bearer ${token}`} });
        return res
    } catch (error) {
        console.log(" ERRO AO DELETAR UM SEGMENTO: " + error);
        return error.response
    }
}
export const buscarSegmentos = async () => {

    try {
        const token = sessionStorage.getItem('token')

        let res = await axios.get('http://127.0.0.1:3000/segmento',{
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        });
        return res
    } catch (error) {
        console.log(error);
        return error.response
    }
}
