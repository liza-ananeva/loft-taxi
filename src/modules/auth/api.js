import axios from '../../axios';

export const serverLogin = async (user) => {
    const response = await axios({
        method: 'post',
        url: 'auth',
        data: user
    });
  
    return response.data;
}

export const serverSignup = async (user) => {
    const response = await axios({
        method: 'post',
        url: 'register',
        data: user
    });
  
    return response.data;
}
