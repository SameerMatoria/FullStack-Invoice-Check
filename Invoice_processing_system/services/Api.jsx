import axios from 'axios'

const API_URL = 'http://localhost:8080'

export const saveInvoice = async(paylod) => {
    try{
        await axios.post(`${API_URL}/invoice`,paylod);
    }
    catch(error){
        console.log('Error : ',error.message);
        return error.respone.data;
    }
}

export const getAllInvoice = async() => {
    try {
        return await axios.get(`${API_URL}/invoice`);
    } catch (error) {
        console.log('Error : ',error.message);
        return error.respone.data;
    }
}