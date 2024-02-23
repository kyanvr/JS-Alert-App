/**
 * My Firebase Configuration
 */

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDmhvmLuEwEnb6myey0KWO3jJV8h8r4msk',
  authDomain: 'finaal-werkstuk-ek1.firebaseapp.com',
  projectId: 'finaal-werkstuk-ek1',
  storageBucket: 'finaal-werkstuk-ek1.appspot.com',
  messagingSenderId: '116721977238',
  appId: '1:116721977238:web:1c2e7cf2f671039f22ffb7',
  databaseURL: 'gs://finaal-werkstuk-ek1.appspot.com',
};

// Initialize Firebase and Storage
const initFirebase = initializeApp(firebaseConfig);
const initStorage = getStorage(initFirebase);

export {
  initFirebase,
  initStorage,
};
