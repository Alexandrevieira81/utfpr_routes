import axios from 'axios';

export const loginUser = async (user) => {
    console.log("Entrou no usuário senha "+user.senha+ " RA "+user.registro);
    try {
        let res = await axios.post('http://127.0.0.1:3000/login', user, {headers: {
            "Content-Type": "application/json"}});
        return res
    } catch (error) {
        console.log("login: "+ error);
        return error.response
    }
}

export const deslogarUser = async () => {
    try {
        const token = sessionStorage.getItem('token')
        let res = await axios.post('http://127.0.0.1:3000/logout', { headers: { Authorization: `Bearer ${token}` }});
        return res
    } catch (error) {
        console.log("logout: "+ error);
        return error.response
    }
}