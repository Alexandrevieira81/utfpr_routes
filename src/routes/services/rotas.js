import axios from 'axios';

export const buscarRotas = async (rota) => {

    try {

        const token = sessionStorage.getItem('token')

        
        let res = await axios.post('http://127.0.0.1:3000/rotas',rota, {
            headers: {
                "Content-Type": "application/json",
                Authorization: token
            }
        });
        return res
    } catch (error) {
        console.log(error);
        return error.response
    }
}

export const buscarAllRotas = async (rota) => {

    try {
        const token = sessionStorage.getItem('token')

        let res = await axios.get('http://127.0.0.1:3000/selectRotasSemFiltro/' + rota.inicio + '/' + rota.fim, {
            headers: {
                "Content-Type": "application/json",
                Authorization: token
            }
        });
        return res
    } catch (error) {
        console.log(error);
        return error.response
    }
}