import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATBGIxu4BRDmylvD5yx_C-VgfCL0euvsA",
  authDomain: "miniblog-55ee8.firebaseapp.com",
  projectId: "miniblog-55ee8",
  storageBucket: "miniblog-55ee8.firebasestorage.app",
  messagingSenderId: "307465764990",
  appId: "1:307465764990:web:68de57157206f48c75582f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
