import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCcIuiTrxK-j6nwixEcS9eVKdi5vruHi_g',
  authDomain: 'house-marketplace-app-e79bd.firebaseapp.com',
  projectId: 'house-marketplace-app-e79bd',
  storageBucket: 'house-marketplace-app-e79bd.appspot.com',
  messagingSenderId: '160668225721',
  appId: '1:160668225721:web:635c1acd3dfd5c8a7d4b68',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
