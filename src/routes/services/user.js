import axios from 'axios';

export const loginUser = async (user) => {

    try {
        let res = await axios.post('http://127.0.0.1:3000/login', user, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        return res
    } catch (error) {
        console.log("ERRO Login: " + error);
        return error.response
    }
}

export const deslogarUser = async () => {
    try {
        const token = sessionStorage.getItem('token')

        let res = await axios.post('http://127.0.0.1:3000/logout', {}, { headers: { Authorization: token } });
        //let res = await axios.get(host+'/users/'+id, { headers: { Authorization: `Bearer ${token}` } })
        return res
    } catch (error) {
        console.log("ERRO logout: " + error);
        return error.response
    }
}

export const cadastrarUser = async (user) => {
    console.log(user);

    try {
        const token = sessionStorage.getItem('token')
        let res = await axios.post('http://127.0.0.1:3000/usuarios', user, { headers: { Authorization: token } });
        return res
    } catch (error) {
        console.log("ERRO AO CADASTRAR: " + error);
        return error.response
    }
}

export const buscarUser = async (userRegistro) => {
    console.log(userRegistro);

    try {
        const token = sessionStorage.getItem('token')
        let res = await axios.get('http://127.0.0.1:3000/usuarios/'+userRegistro, { headers: { Authorization: token } });
        return res
    } catch (error) {
        console.log(" ERRO GET USUARIO: " + error);
        return error.response
    }
}