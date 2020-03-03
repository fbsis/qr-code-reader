
import * as data from './config/defaultInformation.json';
import axios from 'axios'
import {AsyncStorage} from 'react-native';


export async function getInformation(qrCode) {
    let leitura = await getDBInformation();
    leitura = JSON.parse(leitura);
    const dbInformation = leitura.data.filter(e => e.qrCode == qrCode);
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

export async function setDBInformation(dbJson){
    console.log('1', dbJson);
    try {
        console.log('2', dbJson);
        await AsyncStorage.setItem('@trackingDB:data', dbJson);
      } catch (error) {
        // Error saving data
        console.log('error', error);
      }
    
}

export async function getDBInformation(){
    try {
        const value = await AsyncStorage.getItem('@trackingDB:data');
        if (value !== null) {
          // We have data!!
          console.log('have', value);
          return value;
        }else{
            console.log('dont have', value);
            return data.data;
        }
      } catch (error) {
        // Error retrieving data
        console.log('error', error);
        return data.data;
      }
    
}
