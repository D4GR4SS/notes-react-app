import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyADTYqLId03v0W7N9kikdUofxlgsPeQI_E',
  authDomain: 'notes-app-a7db8.firebaseapp.com',
  projectId: 'notes-app-a7db8',
  storageBucket: 'notes-app-a7db8.appspot.com',
  messagingSenderId: '821847792386',
  appId: '1:821847792386:web:9bcab45251b7819202801b',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, 'notes');
