
import * as data from './config/defaultInformation.json';
import axios from 'axios'

export function getInformation(qrCode) {
    const leitura = data.data;
    const dbInformation = leitura.filter(e => e.qrCode == qrCode);
    return dbInformation
}


export function getDefaultInformation(qrCode) {
    
    
}

export async function  validateAndGetJsonUrl(url){
    try {
        const data = await axios.get(url);

        if(data.status == 200){
            if(data.data.data){
                return 'Invalid';
            }
            return data.data
        }else{
            return 'Error';
        }
    } catch (error) {
        return 'Error';

    }
}

export function setDBInformation(dbJson){

    
}