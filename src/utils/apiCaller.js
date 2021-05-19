import axios from 'axios';
import * as Config from './../constants/Config';

const callApi = (endpoint, method = 'GET', body) => {
    return axios({
        url:`${Config.API_URL}/${endpoint}`,
        method: method,
        data: body
    }).catch(err => {
        console.log(err);
    });
}

export default callApi;