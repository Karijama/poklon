import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8DG-C5SSB3FPaLBbLFN4M_869-peQdL0",
  authDomain: "angel-71cfd.firebaseapp.com",
  projectId: "angel-71cfd",
  storageBucket: "angel-71cfd.appspot.com",
  messagingSenderId: "339533358512",
  appId: "1:339533358512:web:c08e046615d145b4e26275"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default {auth,app};