import axios from 'axios'

const API_URL = ''

export const saveInvoice = async(paylod) => {
    try{
        await axios.post(`${API_URL}/invoice`,paylod)
    }
    catch(error){
        console.log('Error : ',error.message);
    }
}