import * as data from './config/defaultInformation.json';
import axios from 'axios';
import { AsyncStorage } from 'react-native';

export async function getInformation(qrCode) {
  let info = await getDBInformation();
  console.log('recuperando 2', info);

  return null
  //const dbInformation = info.data.filter(e => e.qrCode == qrCode);
  return dbInformation;
}

export async function validateAndGetJsonUrl(url) {
  try {
    const data = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    //console.log('result data', data.status, data.data, JSON.parse(data));
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
    const storage = await AsyncStorage.getItem('@dbInformationJson');

    if (storage !== null) {
      return eval(storage);
    } else {
      await setDBInformation(data);
      return JSON.parse(data);
    }
  } catch (error) {
    return error;
  }
}

export async function setDBInformation(dbJson) {
  dbJson = JSON.stringify(dbJson);

  try {
    await AsyncStorage.setItem('@dbInformationJson', dbJson);
    console.log('apos salvar', dbJson);
  } catch (error) {
    console.log(error);
    return error;
    // Error saving data
  }
}

export async function clear(dbJson) {
  console.log('clear')
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.log(error);
    return error;
    // Error saving data
  }
}