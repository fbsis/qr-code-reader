import {AsyncStorage} from 'react-native';
import {StyleSheet, Root, Toast, Alert} from 'react-native';

const StorageKeyColor = '@themeColor';

export function themesAvaliable() {
  return [
    '#2980B9',
    '#C0392B',
    '#E74C3C',
    '#9B59B6',
    '#F44336',
    '#E91E63',
    '#673AB7',
    '#3F51B5',
    '#2196F3',
    '#03A9F4',
    '#00BCD4',
    '#009688',
    '#4CAF50',
    '#8BC34A',
    '#CDDC39',
    '#FFEB3B',
    '#FFC107',
    '#FF9800',
    '#FF5722',
    '#795548',
    '#607D8B',
  ];
}

export async function getColor() {
  try {
    const data = await AsyncStorage.getItem(StorageKeyColor);
    if (data !== null) {
      return data;
    } else {
      return themesAvaliable()[0];
    }
  } catch (error) {
    return error;
  }
}

export async function setColor(color) {
  try {
    await AsyncStorage.setItem(StorageKeyColor, color);
  } catch (error) {
    return error;
    // Error saving data
  }
}

export async function getCurrentLogo() {}
export async function SetLogo() {}
