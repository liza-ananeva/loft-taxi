import axios from '../../axios';

export const serverSaveCard = async (card) => {
    const response = await axios({
        method: 'post',
        url: 'card',
        data: card
    });
  
    return response.data;
}

export const serverGetCard = async () => {
    const response = await axios({
        method: 'get',
        url: 'card?token=AUTH_TOKEN'
    });
    return response.data;
}
