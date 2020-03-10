import * as data from './config/defaultInformation.json';
import axios from 'axios';
import {AsyncStorage} from 'react-native';

export async function getInformation(qrCode) {
  // let recuperando = await getDBInformation();
  // console.log('recuperando 1', recuperando);

  // console.log('getInformation', await getDBInformation());
  const leitura = data.data;
  console.log('leitura', leitura);

  const dbInformation = leitura.filter(e => e.qrCode == qrCode);
  return dbInformation;
}

export async function validateAndGetJsonUrl(url) {
  try {
    const data = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('result data', data.status, data.data);
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
    if (data !== null) {
      console.log('ja tem');
      return JSON.parse(data);
    } else {
      // first time
      console.log('primeira vez');

      await setDBInformation(data.data);
      return data.data;
    }
  } catch (error) {
    return error;
  }
}

export async function setDBInformation(dbJson) {
  try {
    await AsyncStorage.setItem('@dbInformationJson', dbJson);
    console.log('apos salvar', dbJson);
  } catch (error) {
    return error;
    // Error saving data
  }
}
