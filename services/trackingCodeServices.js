import * as data from './config/defaultInformation.json';
import axios from 'axios';
import {AsyncStorage} from 'react-native';

export function getInformation(qrCode) {
  const leitura = data.data;
  const dbInformation = leitura.filter(e => e.qrCode == qrCode);
  return dbInformation;
}

export async function validateAndGetJsonUrl(url) {
  try {
    const data = await axios.get(url);
    console.log('result data', data.status);
    if (data.status == 200) {
      if (data.data.data) {
        return 'Invalid';
      }
      return data.data;
    } else {
      return 'Error';
    }
  } catch (error) {
    return 'Error';
  }
}

export async function getDBInformation() {
  try {
    const data = await AsyncStorage.getItem('@dbInformationJson');
    if (value !== null) {
      console.log('ja tem')
      return data;
    }else{
      // first time
      console.log('primeira vez')

      await setDBInformation(data.data);
      return data.data;
    }
  } catch (error) {
    return error;
  }
}

export async function setDBInformation(dbJson) {
  try {
    if (
      await AsyncStorage.setItem('@dbInformationJson', JSON.stringify(dbJson))
    ) {
        console.log('apos salvar')
      return true;
    }
  } catch (error) {
    return error;
    // Error saving data
  }
}
