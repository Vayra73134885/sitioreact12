// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AAIzaSyD2IMi2ciT7cAKHa6w9uhKnzeX1VMOpqHA',
    authDomain: 'fb-bdreact1-5a31c.firebaseapp.com',
    projectId: 'fb-bdreact1-5a31c',
    storageBucket: "fb-bdreact1-5a31c.appspot.com",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;
