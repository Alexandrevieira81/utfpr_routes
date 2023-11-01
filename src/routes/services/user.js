import axios from 'axios';
const baseURL = 'http://25.64.61.9:22000';

export const loginUser = async (user) => {

    try {
        let res = await axios.post(baseURL+'/login', user, {
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

        let res = await axios.post(baseURL+'/logout', {}, { headers: { Authorization: `Bearer ${token}`} });
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
        let res = await axios.post(baseURL+'/usuarios', user, { headers: { Authorization: `Bearer ${token}` } });
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
        let res = await axios.get(baseURL+'/usuarios/'+userRegistro, { headers: { Authorization: `Bearer ${token}` } });
        return res
    } catch (error) {
        console.log(" ERRO GET USUARIO: " + error);
        return error.response
    }
}

export const buscarAllUser = async () => {
   

    try {
        const token = sessionStorage.getItem('token')
        let res = await axios.get(baseURL+'/usuarios', { headers: { Authorization: `Bearer ${token}` } });
        return res
    } catch (error) {
        console.log(" ERRO GET USUARIO: " + error);
        return error.response
    }
}

export const AtualizarUser = async (userRegistro) => {
    console.log(userRegistro);

    try {
        const token = sessionStorage.getItem('token')
        let res = await axios.put(baseURL+'/usuarios',userRegistro, { headers: { Authorization: `Bearer ${token}` }});
        return res
    } catch (error) {
        console.log(" ERRO PUT USUARIO: " + error);
        return error.response
    }
}

export const DeletarUser = async (userRegistro) => {
    console.log(userRegistro);

    try {
        const token = sessionStorage.getItem('token')
        let res = await axios.delete(baseURL+'/usuarios/'+userRegistro, { headers: { Authorization: `Bearer ${token}`} });
        return res
    } catch (error) {
        console.log(" ERRO GET USUARIO: " + error);
        return error.response
    }
}



