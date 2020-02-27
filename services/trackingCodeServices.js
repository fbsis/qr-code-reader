
import * as data from './config/defaultInformation.json';


export function getInformation(qrCode) {
    const leitura = data.data;
    const dbInformation = leitura.filter(e => e.qrCode == qrCode);
    return dbInformation
}


export function getDefaultInformation(qrCode) {
    
    
}