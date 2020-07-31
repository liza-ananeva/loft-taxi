import axios from '../../axios';

export const serverAddressList = async () => {
    const response = await axios({
        method: 'get',
        url: 'addressList'
    });
  
    return response.data;
}

export const serverRoute = async (route) => {
    const response = await axios({
        method: 'get',
        url: `route?address1=${route.address1}&address2=${route.address2}`
    });

    return response.data;
}
