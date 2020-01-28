import localForage from 'localforage';
// import AsyncStorage from '@react-native-community/async-storage';

const asyncStorageDriver: LocalForageDriver = {
  _driver: 'asyncStorageDriver',
  _initStorage: function(options) {
    console.log('Initialize', options);
  },
  clear: function(callback) {
    console.log('CLEAR');
    // AsyncStorage.clear(callback).catch(console.error);
  },
  getItem: function(key, callback) {
    console.log('GET_ITEM', key);
    // AsyncStorage.getItem(key).then(result => callback(result)).catch(error => callback(undefined, error));
  },
  iterate: function(iteratorCallback, successCallback) {
    // Custom implementation here...
  },
  key: function(n, callback) {
    // Custom implementation here...
  },
  keys: function(callback) {
    // Custom implementation here...
  },
  length: function(callback) {
    // Custom implementation here...
  },
  removeItem: function(key, callback) {
    // Custom implementation here...
  },
  setItem: function(key, value, callback) {
    // Custom implementation here...
  }
};

export default asyncStorageDriver;
