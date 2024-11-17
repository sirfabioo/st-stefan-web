import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFFAGqdejheV0ugKJlQF5BjFhzBgo_AYs",
  authDomain: "st-stefan-nms-web.firebaseapp.com",
  projectId: "st-stefan-nms-web",
  storageBucket: "st-stefan-nms-web.appspot.com",
  messagingSenderId: "15070844426",
  appId: "1:15070844426:web:1b831997ca12259cc071f3",
  measurementId: "G-WNY9E0038P",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { db, storage, auth };
