import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBVi29BWp_VKej6gnDdfQXzdOsSOUEEFNk",
  authDomain: "angus2-d16d8.firebaseapp.com",
  databaseURL: "https://console.firebase.google.com/u/0/project/angus2-d16d8/database/angus2-d16d8-default-rtdb/data/~2F",
  projectId: "angus2-d16d8",
  storageBucket: "angus2-d16d8.appspot.com",
  messagingSenderId: "706732654715",
  appId: "1:706732654715:web:8aa107a63d30fe82f922de",
  measurementId: "G-FMBRG9J2GR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export default auth;