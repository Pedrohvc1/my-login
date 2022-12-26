import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3000',
});

export const createSession = async (credential, password) => {
    return(
        api.post('/sessions', {credential, password})
    )
};

// //para vê diferenca de pages no homepage
// export const getUsers = async () => {
//     return api.get('/users');
// }