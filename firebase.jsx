import { initializeApp } from "firebase/app";
import { collection, getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCnzVH2zqZdIzjlJ6qSnnlvA2oEhVl2PYI",
  authDomain: "react-notes-7c6a9.firebaseapp.com",
  projectId: "react-notes-7c6a9",
  storageBucket: "react-notes-7c6a9.appspot.com",
  messagingSenderId: "4245737927",
  appId: "1:4245737927:web:1e86d77836f5ef8ec649e2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")